module.exports = function(Order) {
// remote method before hook
 Order.beforeRemote('placeOrder', function(context, order, next) {
    next();
  });
Order.placeOrder= function(orderObj, cb) {
	var app = Order.app;
	var SalesOrder = app.models.SalesOrder;
	var SalesOrderLine = app.models.SalesOrderLine;
	var originalOrder = orderObj;
	var salesOrders = orderObj.salesOrders;
	var customerId = orderObj.customerId;
	var dataSource = app.datasources.db;
	orderObj.orderStatusId = 1;
	var newOrderId;
	return Order
			.create(orderObj)
			.then(function createSalesOrders (newOrder) {
				newOrderId = newOrder.id;
				originalOrder.id = newOrder.id;
				if (salesOrders) {
					for(var i=0;i<salesOrders.length;i++){
						var salesOrderLines = salesOrders[i].salesOrderLines;
						salesOrders[i].orderId = newOrder.id;
						salesOrders[i].customerId = customerId;
						var salesOrderTemp = salesOrders[i];
						salesOrderTemp.salesOrderStatusId = 1;
						SalesOrder.create(salesOrderTemp).then(function createSalesOrderLines(newSalesOrder){
							salesOrderTemp.id=newSalesOrder.id;
							for(var j=0;j<salesOrderLines.length;j++)
							{
								salesOrderLines[j].salesOrderId = newSalesOrder.id;
								var salesOrderLineTemp = salesOrderLines[j];
								SalesOrderLine.create(salesOrderLineTemp).then(function createSalesOrderLineItem(newSalesOrderLineIte){
									salesOrderLineTemp.id=newSalesOrderLineIte.id;
								}).catch(function (err) {
								  console.log('error while creating order '+err);
									cb(err);
								});
							}
						}).catch(function (err) {
								  console.log('error while creating order '+err);
									cb(err);
								});
					}
					originalOrder.salesOrders = salesOrders;
				}
				Order.app.models.Customer.findById(customerId, function (err, cust) {
									var email = cust.email;
									var emailOderId = newOrderId;
									 Order.app.models.Email.send({
										  to: email,
										  from: 'agrubcare@gmail.com',
										  subject: 'Order Received #'+emailOderId,
										  text: 'New Order',
										  html: 'Hi '+cust.name+' , Your Order with reference number <b> '+emailOderId+' </b> has been received. We will inform you once we confirm your order. Thank you for placing order with us.'
										}, function(err, mail) {
										  console.log('email sent to !'+cust.name+' for order with orderId '+emailOderId);
										});
								});
			})
			.catch(function (err) {
			 console.log('error while creating order '+err);
			 cb(err);
		});
		cb(null,originalOrder);
}

Order.fullOrders = function(cb) {
	Order.find({
	  include:['orderStatus',{salesOrders:['salesOrderStatus',{salesOrderLines:'item'}]}],
	}, cb);
};

Order.fullOrder = function(orderId, cb) {
	Order.findById(orderId,{
	  include:['orderStatus',{salesOrders:['salesOrderStatus',{salesOrderLines:'item'}]}],
	}, cb);
};

Order.acceptOrder = function(orderId, cb) {
	Order.findById(orderId,{
	  include:[{salesOrders:{salesOrderLines:'item'}}]
	},function(err,exOrder){
		if(err){
			cb(err);
		}
		var ordObj = exOrder.toJSON();;
		if(ordObj.salesOrders == null || ordObj.salesOrders.length == 0){
			cb(null,'no sales orders exist for this order');
		}
	
		for(var j=0;j<ordObj.salesOrders.length;j++)
		{
			var tempDC = {
							"purchaseOrderId": ordObj.salesOrders[j].id,
							"salesOrderId": ordObj.salesOrders[j].id,
							"customerId": ordObj.customerId
						};
			Order.app.models.DeliveryChalan.create(tempDC).then(function createDeliverChallan(newDeliveryChallan){
				console.log(newDeliveryChallan);
			}).catch(function (err){
			 console.log('error while creating DeliveryChallan '+err);
				cb(err);
			});
		}
		cb(null, 'success');
	});
};
Order.remoteMethod(
        'placeOrder', 
        {
          accepts: {arg: 'orderObj', type: 'object'},
          returns: {arg: 'orderObj', type: 'object'}
        }
    );
Order.remoteMethod(
        'fullOrders', 
        {
          returns: {arg: 'orders', type: 'array'},
		  http: {path:'/fullOrders', verb: 'get'}
        }
    );
Order.remoteMethod(
        'fullOrder', 
        {
		  accepts: {arg: 'orderId', type: 'string'},
          returns: {arg: 'order', type: 'object'},
		  http: {path:'/fullOrders/:orderId', verb: 'get'}
        }
    );
Order.remoteMethod(
        'acceptOrder', 
        {
		  accepts: {arg: 'orderId', type: 'string'},
          returns: {arg: 'status', type: 'object'},
		  http: {path:'/accept', verb: 'get'}
        }
    );
};
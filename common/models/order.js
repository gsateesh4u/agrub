module.exports = function(Order) {
Order.placeOrder= function(orderObj, cb) {
	var app = Order.app;
	var SalesOrder = app.models.SalesOrder;
	var SalesOrderLine = app.models.SalesOrderLine;
	var originalOrder = orderObj;
	var salesOrders = orderObj.salesOrders;
	var customerId = orderObj.customerId;
	var dataSource = app.datasources.db;
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
		cb(originalOrder);
}

Order.fullOrders = function(cb) {
	Order.find({
	  include:[{salesOrders:{salesOrderLines:'item'}}],
	}, cb);
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
		  http: {path:'/full', verb: 'get'}
        }
    );
};
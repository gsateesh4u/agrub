module.exports = function(Order) {
Order.placeOrder= function(orderObj, cb) {
	var app = Order.app;
	var SalesOrder = app.models.SalesOrder;
	var SalesOrderLine = app.models.SalesOrderLine;
	var originalOrder = orderObj;
	var salesOrders = orderObj.salesOrders;
	var customerId = orderObj.customerId;
	var dataSource = app.datasources.db;
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
								  return err;
								});
							}
						}).catch(function (err) {
								  return err;
								});;
					}
					originalOrder.salesOrders = salesOrders;
				}
			})
			.catch(function (err) {
		  return err;
		});
		return originalOrder;
	
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
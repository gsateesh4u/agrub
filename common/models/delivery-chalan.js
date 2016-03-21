module.exports = function(DeliveryChalan) {
DeliveryChalan.afterSave = function(next) {
  if(this.id == 1){
  DeliveryChalan.app.models.Email.send({
					  to: 'agrubcare@gmail.com',
					  from: 'agrubcare@gmail.com',
					  subject: 'DeliveryChallan Created #'+this.id,
					  text: 'New DeliverChallan',
					  html: 'Hi , New Delivery Challan has been generated with id # <b> '+this.id+' </b>. Please process it.'
					});
  }
  next();
};
DeliveryChalan.updateSO = function(dc, cb) {
	var salesOrder = dc.salesOrder;
	if(salesOrder == null || salesOrder.salesOrderLines == null || salesOrder.salesOrderLines.length == 0){
		var err = new Error();
        err.status = 400;
        err.message = "Bad request";
		cb(err);
	}
	var app = DeliveryChalan.app;
	var SalesOrderLine = app.models.SalesOrderLine;
	var salesOrderLines = salesOrder.salesOrderLines;
	for(var j=0;j<salesOrderLines.length;j++)
	{
		SalesOrderLine.update({id:salesOrderLines[j].id},{custUpdatedItemQuantity : salesOrderLines[j].custUpdatedItemQuantity,
							custUpdatedDate : salesOrderLines[j].custUpdatedDate}, function (err, soLine) {
									if(err){
										cb(err);
									}
								});
	}
	DeliveryChalan.update({id:dc.id},{deliveryChalanStatusId : 6}, function (err, updatedDC) {
									if(err){
										cb(err);
									}
						});
	dc.deliveryChalanStatusId = 6;
	cb(null,dc);
	
};
DeliveryChalan.remoteMethod(
        'updateSO', 
        {
		  accepts: [
					{arg: 'dc', type: 'object'}
					],
          returns: {arg: 'deliveryChalan', type: 'object'},
		  http: {path:'/updateSO', verb: 'put'}
        }
    );
};

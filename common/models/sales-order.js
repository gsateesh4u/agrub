module.exports = function(SalesOrder) {
SalesOrder.acceptSO = function(id, cb) {
	SalesOrder.findById(id,function(err,exSO){
		if(err){
			cb(err);
		}
		var soObj = exSO.toJSON();;
		var tempDC = {
							"purchaseOrderId": ordObj.id,
							"salesOrderId": ordObj.id,
							"customerId": ordObj.customerId
						};
			SalesOrder.app.models.DeliveryChalan.create(tempDC).then(function createDeliverChallan(newDeliveryChallan){
			SalesOrder.app.models.Email.send({
					  to: 'agrubcare@gmail.com',
					  from: 'agrubcare@gmail.com',
					  subject: 'DeliveryChallan Created #'+response.id,
					  text: 'New DeliverChallan',
					  html: 'Hi , New Delivery Challan has been generated with id # <b> '+newDC.id+' </b>. Please process it.'
					});
				cb(newDeliveryChallan);
			}).catch(function (err){
			 console.log('error while creating DeliveryChallan '+err);
				cb(err);
			});
	});
};
SalesOrder.remoteMethod(
        'acceptSO', 
        {
		  accepts: {arg: 'id', type: 'string'},
          returns: {arg: 'deliveryCallan', type: 'object'},
		  http: {path:'/:id/Accept', verb: 'get'}
        }
    );
};

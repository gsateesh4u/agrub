module.exports = function(Customer) {

	Customer.deliveryChallans = function(customerId, cb){
		var app = Customer.app;
		//var Order = app.models.Order;
		app.models.OrderStatus.find({
			where: {name:'OFD'}
			
		}).then(function(orderStatus){
			console.log(orderStatus[0].id);
			app.models.Order.find({
				where: {and: [ {customerId:customerId}, {orderStatusId : orderStatus[0].id} ] }, include:['orderStatus','customer',{lineItems:'item'}]
				
			}).then(function(dcs){
				cb(null,dcs);
			});
		});
	};
	Customer.remoteMethod(
	        'deliveryChallans', 
	        {
	          accepts: {arg: 'customerId', type: 'number'},
	          returns: {arg: 'deliveryChallans', type: 'array'},
	          http: {path:'/:customerId/deliveryChallans', verb: 'get'}
	        }
	    );
};

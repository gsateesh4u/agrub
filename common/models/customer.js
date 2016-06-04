module.exports = function(Customer) {

	Customer.deliveryChallans = function(customerId, cb){
		var app = Customer.app;
		var Order = app.models.Order;
		Order.find({
			include:['orderStatus','customer',{lineItems:'item'}],
			where: {customerId:customerId}
		}).then(function(dcs){
			var deliveryChallans = [];
			if(dcs && dcs.length > 0){
				dcs.forEach(function(dc,itr){
					if(dc.orderStatus.name === 'DC' || dc.orderStatus.name === 'OFD'){
						deliveryChallans.push(dc);
					}
				});
			}
			cb(null,deliveryChallans);
		});
	};
	Customer.remoteMethod(
	        'deliveryChallans', 
	        {
	          accepts: {arg: 'customerId', type: 'string'},
	          returns: {arg: 'deliveryChallans', type: 'array'},
	          http: {path:'/:customerId/deliveryChallans', verb: 'post'}
	        }
	    );
};

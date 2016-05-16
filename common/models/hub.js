module.exports = function(Hub) {

	Hub.whvendors = function(hubId,cb){
		var app = Hub.app;
		var HubUserMap = app.models.HubUserMap;
		HubUserMap.find({
			where: {'hubId' : hubId},
			include:[{user:'roles'}]
		}).then(function(mappings){
			if(mappings!=null && mappings.length>0){
				var vendors = [];
				mappings.forEach(function(mapping){
					mapping = mapping.toJSON();
					if(mapping.user.roles!=null && mapping.user.roles.length>0){
						mapping.user.roles.forEach(function(role){
							if(role.name == 'WHADMIN'){
								vendors.push(mapping.user);
							}
						});
					}
				});
				cb(null,vendors);
			}else{
				var err = new Error('No Vendros present');
				err.statusCode = 404;
				cb(err);
			}
		});
	}
	Hub.remoteMethod(
	        'whvendors',
	        {
	          returns: {arg: 'vendors', type: 'array'},
	          accepts: {arg: 'hubId', type: 'number'},
			  http: {path:'/:hubId/whvendors', verb: 'get'}
	        }
	    );
};

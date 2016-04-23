module.exports = function(Item) {
	Item.getDefaultItems = function(cb) {
		Item.find({
			include:['itemCategory','uom'],
			where:{'hubId':1},
		}, cb);
	};
	Item.remoteMethod(
        'getDefaultItems', 
        {
          returns: {arg: 'items', type: 'array'},
		  http: {path:'/getDefaultItems', verb: 'get'}
        }
    );
};

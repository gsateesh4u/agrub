module.exports = function(DailyMktPrice) {
DailyMktPrice.uploadDMP = function(dmps, callback) {
	var existing = [];
	var retValues = [];
	var found = [];
	var len = dmps.length;
	//results is array of dmps
	var results = (function(){
		for(var i=0;i<dmps.length;i++){
			DailyMktPrice.findOne({ where: {and: [ {itemId:dmps[i].itemId}, {marketId:dmps[i].marketId} ] } }, function(err, res) {
				existing.push(res);
				if(--len == 0) {
					existing.forEach(function(ex,j){
						if(ex == null){
							var tempDmp = {
								minPrice : dmps[j].minPrice,
								maxPrice : dmps[j].maxPrice,
								dmpDate : new Date(),
								updatedTimestamp : new Date().getTime(),
								itemId : dmps[j].itemId,
								marketId : dmps[j].marketId
							};
							found.push(tempDmp);
						} else {
							var tempDmp = {
								minPrice : dmps[j].minPrice,
								maxPrice : dmps[j].maxPrice,
								dmpDate : dmps[j].dmpDate,
								updatedTimestamp : new Date().getTime(),
								itemId : ex.itemId,
								marketId : ex.marketId,
								id : ex.id
							};
							found.push(tempDmp);
						}
					});
					found.forEach(function(f,ind){
						retValues.push(DailyMktPrice.upsert(f));
					});
					Q.all(retValues).then(function(data){
						callback(null,data);
					});
				}
			});
		};	
	});
	var ss = results();
};
DailyMktPrice.observe('after save', function(ctx, next){
	var mdl;
	if(ctx.instance)
		mdl = ctx.instance;
	else
		mdl = ctx.data;
	var app = DailyMktPrice.app;
	var DailyMktPriceHistory = app.models.DailyMktPriceHistory;
	var dmpHistory = {
		minPrice : mdl.minPrice,
		maxPrice : mdl.maxPrice,
		dmpDate : mdl.dmpDate,
		updatedTimestamp : mdl.updatedTimestamp,
		itemId : mdl.itemId,
		marketId : mdl.marketId
	};
	DailyMktPriceHistory.create(dmpHistory, function(err, dmp){
		
	});
	next();
});
DailyMktPrice.remoteMethod(
        'uploadDMP', 
        {
		  accepts: {arg: 'dmps', type: 'array'},
          returns: {arg: 'dmps', type: 'array'},
		  http: {path:'/uploadDMP', verb: 'post'}
        }
    );
};

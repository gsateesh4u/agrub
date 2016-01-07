app.service('ServiceAPI',function($http, $q){
	var urlBase = "/api";
	// Return public API.
    return({
    	get: get,
    	update: update,
    	create: create,
    	destroy: destroy
    });
 // Common get method to fetch datas
	function getDataFromServer(targetUrl,params){
		 var request = $http({
                method: "get",
                url: urlBase + targetUrl,
                params: params
            });

            return( request.then( handleSuccess, handleError ) );
	}
});
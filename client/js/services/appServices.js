app.service('ServiceAPI',function($http, $q){
	var urlBase = "https://agrub.mybluemix.net/api/";
	// Return public API.
    return({
    	get: get/*,
    	update: update,
    	create: create,
    	destroy: destroy*/
    });
 // Common get method to fetch datas
	function get(targetUrl,params){
		 var request = $http({
                method: "get",
                url: urlBase + targetUrl,
                params: params
            });

            return( request.then( handleSuccess, handleError ) );
	}
	// I transform the error response, unwrapping the application dta from
    // the API response payload.
    function handleError( response ) {

        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
            ) {

            return( $q.reject( "An unknown error occurred." ) );

        }

        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );

    }


    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess( response ) {

        return( response.data );

    }
});
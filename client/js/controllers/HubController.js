app.controller('HubController', function($scope,Hub){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	Hub.find().$promise
		.then(function(response) { 
			$scope.rowCollection = [].concat(response);
			$scope.rowCollection = [].concat(response);
			$scope.displayedCollection = [].concat($scope.rowCollection);
			if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			}
			$scope.isLoading = false;
		},function( errorMessage ) {
		  $scope.error = "Error has occurred while loading hubs!";
		  $scope.isLoading = false;
	});
});
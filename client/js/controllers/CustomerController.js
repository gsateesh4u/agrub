app.controller('CustomerController', function($scope,Customer){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	Customer.find({
		filter: { include: 'hub' }
	}).$promise
		.then(function(response) { $scope.rowCollection = [].concat(response);
		  $scope.rowCollection = [].concat(response);
		   $scope.displayedCollection = [].concat($scope.rowCollection);
		  if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading customers!";
		  $scope.isLoading = false;
   });
});
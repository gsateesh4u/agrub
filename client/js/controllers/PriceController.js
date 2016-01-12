app.controller('PriceController', function($scope,Pricing){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	Pricing.find({
		filter: { include: ['customer','orderStatus'] }
	}).$promise
		.then(function(response) { $scope.rowCollection = [].concat(response);
		  $scope.rowCollection = [].concat(response);
		   $scope.displayedCollection = [].concat($scope.rowCollection);
		  if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading orders!";
		  $scope.isLoading = false;
   });
});
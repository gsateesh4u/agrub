app.controller('ItemController',function($scope,Item){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	Item.find({
		filter: { include: 'itemCategory' }
	}).$promise
		.then(function(response) { $scope.rowCollection = [].concat(response);
		  $scope.displayedCollection = [].concat($scope.rowCollection);
		  if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading items!";
		  $scope.isLoading = false;
   });
});
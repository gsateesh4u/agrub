app.controller('UserController',['$scope','User', function($scope,User){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.showAddUpdateUser = false;	
	User.find({
		filter: { include: ['customers','roles','hubs'] }
	}).$promise
		.then(function(response) { 
		  $scope.rowCollection = [].concat(response);
		   $scope.displayedCollection = [].concat($scope.rowCollection);
		  if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading users!";
		  $scope.isLoading = false;
   });
}]);
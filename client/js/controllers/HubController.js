app.controller('HubController', function($scope,Hub){
	$scope.tempHub = {
		name : ""
	};
	$scope.addUpdateHub = {
		name : "",
		id:""
	};
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
	$scope.showHub = function(hub,operation){
	   $scope.isSubLoading = true;
	   $scope.header = operation;
	   if(operation == 'Update'){
		   $scope.showAddUpdateHub = true;
		   $scope.isSubLoading = false;
		   angular.copy(hub,$scope.addUpdateHub);
		   $scope.hub = $scope.addUpdateHub;
	   }
	   if(operation == 'Add'){
			$scope.showAddUpdateHub = true;
			angular.copy(hub,$scope.addUpdateHub);
			$scope.hub = $scope.addUpdateHub;
	   }
   };
   $scope.cancel = function(){
	   angular.copy($scope.tempHub,$scope.addUpdateHub);
	   $scope.showAddUpdateHub = false;
   };
   $scope.deleteHub = function deleteHub(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   Hub.delete({id:row.id}).$promise
				.then(function(response) { 
				 Hub.find().$promise
						.then(function(response) {
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
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting hub!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.addOrUpdate = function addOrUpdate(hub,operation){
	   if(operation == 'Add'){
		  Hub.create(hub).$promise
				.then(function(response) { 
				 Hub.find().$promise
						.then(function(response) {
						  $scope.rowCollection = [].concat(response);
						   $scope.displayedCollection = [].concat($scope.rowCollection);
						  if($scope.rowCollection.length==0){
								 $scope.error = "No data found!!!";
							 }
							 $scope.isLoading = false;
							 $scope.showAddUpdateHub = false;
					  },function( errorMessage ) {
						  $scope.error = "Error has occurred while loading hubs!";
						  $scope.showAddUpdateHub = false;
						  $scope.isLoading = false;
				   });
				   $scope.showAddUpdateHub = false;
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating hub!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   
	   }
   };
});
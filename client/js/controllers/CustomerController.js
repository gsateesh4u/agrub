app.controller('CustomerController', function($scope,Customer,Hub){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.showAddUpdateCustomer = false;
	$scope.tempCustomer = {
		name : "",
		address: "",
		phone: "",
		email: "",
		hubId: "",
		hub:{
			id:"",
			name:""
		}
	};
	$scope.addUpdateCust = {
		name : "",
		address: "",
		phone: "",
		email: "",
		hubId: "",
		hub:{
			id:"",
			name:""
		}
	};
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
   $scope.showCustomer = function(cust,operation){
	   $scope.isSubLoading = true;
	   $scope.header = operation;
	   if(operation == 'Update'){
		   $scope.hubs = [cust.hub];
		   $scope.selectedHub = cust.hub;
		   $scope.showAddUpdateCustomer = true;
		   $scope.isSubLoading = false;
		   angular.copy(cust,$scope.addUpdateCust);
		   $scope.customer = $scope.addUpdateCust;
	   }
	   if(operation == 'Add'){
		   Hub.find().$promise
			.then(function(response) { 
				$scope.isSubLoading = false;
				$scope.hubs = [].concat(response);
				if($scope.hubs ==null || $scope.hubs.length==0){
					 $scope.error = "No hubs found!!!";
					 $scope.showAddUpdateCustomer = false;
				}else {
					$scope.showAddUpdateCustomer = true;
					angular.copy(cust,$scope.addUpdateCust);
					$scope.customer = $scope.addUpdateCust;
				}
			},function( errorMessage ) {
			  $scope.error = "Error has occurred while loading hubs!";
			  $scope.isSubLoading = false;
			  $scope.showAddUpdateCustomer = false;
			});
	   }
   };
   $scope.cancel = function(){
	   angular.copy($scope.tempCustomer,$scope.addUpdateCust);
	   $scope.showAddUpdateCustomer = false;
   };
   $scope.deleteCustomer = function deleteCustomer(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   Customer.delete({id:row.id}).$promise
				.then(function(response) { 
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
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting customer!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.addOrUpdate = function addOrUpdate(cust,operation){
	   if(operation == 'Add'){
		  cust.hubId = $scope.selectedHub.id;
		  cust.hub.id = $scope.selectedHub.id;
		  Customer.create(cust).$promise
				.then(function(response) { 
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
							 $scope.showAddUpdateCustomer = false;
					  },function( errorMessage ) {
						  $scope.error = "Error has occurred while loading customers!";
						  $scope.showAddUpdateCustomer = false;
						  $scope.isLoading = false;
				   });
				   $scope.showAddUpdateCustomer = false;
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating customer!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   
	   }
   };
});
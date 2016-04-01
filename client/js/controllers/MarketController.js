app.controller('MarketController', function($scope,Hub, Market){
	$scope.tempMarket = {
		name : "",
		hubId : ""
	};
	$scope.addUpdateMarket	= {
		name : "",
		hubId : "",
		id:""
	};
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	Market.find({
	filter: { include: ['hub'] }
	}).$promise
		.then(function(response) { 
			$scope.rowCollection = [].concat(response);
			$scope.displayedCollection = [].concat($scope.rowCollection);
			if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			}
			$scope.isLoading = false;
		},function( errorMessage ) {
		  $scope.error = "Error has occurred while loading markets!";
		  $scope.isLoading = false;
	});
	$scope.showMarket = function(market,operation){
	   $scope.isSubLoading = true;
	   $scope.header = operation;
	    Hub.find().$promise
			.then(function(response) { 
				$scope.hubs = [].concat(response);
				if($scope.hubs ==null || $scope.hubs.length==0){
					 $scope.errorMessage = "No hubs found!!!";
					 $scope.showAddUpdateMarket = false;
				}else {
					if(operation == 'Update'){
					   angular.forEach($scope.hubs, function (tempHub) {
						 if(tempHub.id == market.hubId){
							$scope.selectedHub = tempHub;
						 }
					  });
				   }
				   $scope.isSubLoading = false;
					$scope.showAddUpdateMarket = true;
					angular.copy(market,$scope.addUpdateMarket);
					$scope.market = $scope.addUpdateMarket;
				}
			},function( errorMessage ) {
			  $scope.errorMessage = "Error has occurred while loading hubs!";
			  $scope.isSubLoading = false;
			  $scope.showAddUpdateItem = false;
			});
   };
   $scope.cancel = function(){
	   angular.copy($scope.tempMarket,$scope.addUpdateMarket);
	   $scope.showAddUpdateMarket = false;
   };
   $scope.deleteMarket = function deleteMarket(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   Market.delete({id:row.id}).$promise
				.then(function(response) { 
				 Market.find({
						filter: { include: ['hub'] }
						}).$promise
						.then(function(response) {
						  $scope.rowCollection = [].concat(response);
						   $scope.displayedCollection = [].concat($scope.rowCollection);
						  if($scope.rowCollection.length==0){
								 $scope.error = "No data found!!!";
							 }
							 $scope.isLoading = false;
					  },function( errorMessage ) {
						  $scope.error = "Error has occurred while loading markets!";
						  $scope.isLoading = false;
				   });
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting market!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.addOrUpdate = function addOrUpdate(market,operation){
    market.hubId = $scope.selectedHub.id;
	   if(operation == 'Add' || operation == 'Update'){
		  Market.upsert(market).$promise
				.then(function(response) { 
				 Market.find({
						filter: { include: ['hub'] }
						}).$promise
						.then(function(response) {
						  $scope.rowCollection = [].concat(response);
						   $scope.displayedCollection = [].concat($scope.rowCollection);
						  if($scope.rowCollection.length==0){
								 $scope.error = "No data found!!!";
							 }
							 $scope.isLoading = false;
							 $scope.showAddUpdateMarket = false;
					  },function( errorMessage ) {
						  $scope.error = "Error has occurred while loading markets!";
						  $scope.showAddUpdateMarket = false;
						  $scope.isLoading = false;
				   });
				   $scope.showAddUpdateMarket = false;
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating markets!";
				  $scope.isLoading = false;
		   });
	   } 
   };
});
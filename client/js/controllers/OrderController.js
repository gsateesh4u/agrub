app.controller('OrderController', function($scope,Order){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	Order.find({
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
   $scope.showOrderDetails = function showOrderDetails(ord){
   Order.findById({id:ord.id,
		filter: {include:[{salesOrders:{salesOrderLines:'item'}}] }
	}).$promise
		.then(function(response) { 
		  if(response.length==0){
				 $scope.subError = "No data found!!!";
			 }
			 else{
				$scope.selectedOrder = response;
				$scope.salesOrders = response.salesOrders;
			 }
			 $scope.isSubLoading = false;
	  },function( errorMessage ) {
		  $scope.subError = "Error has occurred while loading order details!";
		  $scope.isSubLoading = false;
   });
   }
   $scope.cancel = function resetSelectedOrder(){
		$scope.selectedOrder = null;
		$scope.salesOrders = null;
   }
});
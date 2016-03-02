app.controller('DeliveryChalanController', function($scope,SalesOrder, DeliveryChalan, DeliveryChalanStatus, $filter){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	DeliveryChalan.find({
		filter: { include: ['customer',{salesOrder:['salesOrderStatus',{salesOrderLines:'item'}]},'deliveryChalanStatus'] }
	}).$promise
		.then(function(response) { 
		  $scope.rowCollection = [].concat(response);
		   $scope.displayedCollection = [].concat($scope.rowCollection);
		  if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading delivery chalans!";
		  $scope.isLoading = false;
   });
   $scope.showDCDetails = function showDCDetails(dc){
	$scope.selectedDC = dc;
   }
   $scope.changeDCStatus = function(dc,status){
		DeliveryChalan.prototype$updateAttributes(
		   { id: dc.id }, 
		   { deliveryChalanStatusId: status }
		 );
		 dc.deliveryChalanStatusId = status;
		 $scope.selectedDC.deliveryChalanStatusId = status;
		 dc.deliveryChalanStatus = DeliveryChalanStatus.findById({id:status});
   }
   $scope.cancel = function resetSelectedOrder(){
		$scope.selectedOrder = null;
		$scope.salesOrders = null;
   }
});
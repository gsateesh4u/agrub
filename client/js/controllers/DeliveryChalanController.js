app.controller('DeliveryChalanController', function($scope,SalesOrder, DeliveryChalan, DeliveryChalanStatus, $filter, commonService){
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
   $scope.showChangeStatusButton = function(id){
   if(commonService.hasPermission('iidcadmin')){
		return true;
	}else if(commonService.hasPermission('ccadmin') && (id=='1' || id == '2')){
			return true;
	} else if(commonService.hasPermission('whadmin') && (id=='3' || id == '4')){
			return true;
	} else {
		return false;
	}
   }
});
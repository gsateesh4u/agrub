app.controller('PurchaseOrderController', function($scope,Order,commonService, OrderStatus, OrderTracking, Email, $filter){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	function init(){
		OrderStatus.findOne({filter: {where : {name : 'PO'}}}).$promise.then(function(poStatus){
			Order.find({
				filter: { include: ['customer','orderStatus','user'] ,
					where:{orderStatusId: poStatus.id}
			}
			}).$promise
				.then(function(response) { 
				  $scope.poCollection = [].concat(response);
				  if($scope.poCollection.length==0){
						 $scope.error = "No data found!!!";
					 }
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.error = "Error has occurred while loading purchase orders!";
				  $scope.isLoading = false;
		   });
		});
	}
	init();
	$scope.backToMainMenu = function backToMainMenu(){
		$scope.showPOForm = false;
		$scope.selPO = null;
		$scope.selectedPO = null;
	};
	$scope.$watch('pos', function(row) {
		   var flag = false;
		   row.filter(function(r) {
			  if (r.isSelected) {
				  flag = true;
				  $scope.selPO = row;
			  }
		   });
		   if(!flag){
			  $scope.selPO = null;
		   }
		 }, true);
	$scope.showPO = function showPO(){
		if($scope.selPO!=null){
			Order.findOne({
				filter: { include: ['customer',{lineItems:[{item:'itemCategory'},'uom']},'orderStatus','user'] ,
					where:{id: $scope.selPO.id}
				}}).$promise.then(function(fullPO){
					if(fullPO){
						$scope.showPOForm = true;
						$scope.selectedPO = fullPO;
					}
			});
		}
	};
   $scope.acceptPO = function acceptPO(){
	   if($scope.selectedPO){
		   OrderStatus.findOne({filter: {where : {name : 'SO'}}}).$promise.then(function(soStatus){
			   Order.prototype$updateAttributes(
					   { id: $scope.selectedPO.id }, 
					   { orderStatusId: soStatus.id }
					 );
			   var orderTracking = {
					   userId : commonService.getCurrentUser().id,
					   orderId : $scope.selectedPO.id,
					   orderStatusId : soStatus.id,
					   timestamp : new Date()
			   };
			   OrderTracking.create(orderTracking).$promise.then(function(data){
				   $scope.showPOForm = false;
					$scope.selPO = null;
					$scope.selectedPO = null;
				   init();
			   });
		   });
	   }
   }
   $scope.cancel = function resetSelectedOrder(){
		$scope.selectedOrder = null;
		$scope.salesOrders = null;
   }
});
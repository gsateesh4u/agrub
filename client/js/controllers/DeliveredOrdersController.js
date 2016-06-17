app.controller('DeliveredOrdersController', function($scope,Order, OrderStatus, commonService, Email, $filter){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.viewOrder = false;
	$scope.init = function init(){
		OrderStatus.findOne({filter: {where : {name : 'DELIVERED'}}}).$promise.then(function(poStatus){
			Order.find({
				filter: { include: ['customer','orderStatus','user'] ,
					where:{orderStatusId: poStatus.id}
			}
			}).$promise
				.then(function(response) { 
				  $scope.doCollection = [].concat(response);
				  if($scope.doCollection.length==0){
						 $scope.error = "No data found!!!";
					 }
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.error = "Error has occurred while loading orders!";
				  $scope.isLoading = false;
		   });
		});
	}
	$scope.init();
	$scope.viewOrderDetails = function viewOrderDetails(ord){
		Order.findById({
			id : ord.id,
			filter : {
				include : [ {lineItems:[{item:'itemCategory'},'uom']}, 'orderStatus','customer']
			}
		}).$promise.then(function(foundOrd){
			$scope.viewOrder = true;
			$scope.selectedDO = foundOrd;
		});
	};
	$scope.backToMainMenu = function backToMainMenu(){
		$scope.viewOrder = false;
	};
});
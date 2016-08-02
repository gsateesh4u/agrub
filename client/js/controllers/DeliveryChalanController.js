app.controller('DeliveryChalanController', function($scope,Order, OrderStatus, OrderTracking,TransportOperator, commonService, Email, $filter, $modal){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.init = function init(){
		OrderStatus.findOne({filter: {where : {name : 'DC'}}}).$promise.then(function(poStatus){
			Order.find({
				filter: { include: ['customer','lineItems','orderStatus','user','transportOperator'] ,
					where:{orderStatusId: poStatus.id}
			}
			}).$promise
				.then(function(response) { 
				  $scope.dcCollection = [].concat(response);
				  if($scope.dcCollection.length==0){
						 $scope.error = "No data found!!!";
					 }
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.error = "Error has occurred while loading delivery Chalans!";
				  $scope.isLoading = false;
		   });
		});
	}
	$scope.init();

	$scope.markAsDelivered = function markAsDelivered(order){
		if(order){
			 OrderStatus.findOne({filter: {where : {name : 'OFD'}}}).$promise.then(function(dcStatus){
				   Order.prototype$updateAttributes(
						   { id: order.id }, 
						   { orderStatusId: dcStatus.id }
						 );
				   var orderTracking = {
						   userId : commonService.getCurrentUser().id,
						   orderId : order.id,
						   orderStatusId : dcStatus.id,
						   timestamp : new Date()
				   };
				   OrderTracking.create(orderTracking).$promise.then(function(data){
					   $scope.init();
				   });
			   });
		}
	};
	$scope.assigTO = function assigTO(){
		TransportOperator.find({
			where : {
					hubId : $scope.selDC.customer.hubId
				}
		}).$promise.then(function(tos){
			$scope.transportOperators = [].concat(tos);
			var modalInstance = $modal.open({
				templateUrl : 'views/templates/assignToModal.html',
				controller : 'AssignTOCtrl',
				backdrop : 'static',
				backdropClick : true,
				dialogFade : false,
				keyboard : true,
				scope : $scope,
				resolve : {
					transportOperators : function() {
						return $scope.transportOperators;
					},
					so : function() {
						return $scope.selDC;
					}
				}
			});
		});
	};
   $scope.$watch('dcs', function(row) {
	   var flag = false;
	   row.filter(function(r) {
		  if (r.isSelected) {
			  flag = true;
			  $scope.selDC = r;
		  }
	   });
	   if(!flag){
		  $scope.selDC = null;
	   }
	 }, true);
});
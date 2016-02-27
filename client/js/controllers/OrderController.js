app.controller('OrderController', function($scope,Order,SalesOrder, DeliveryChalan, SalesOrderStatus, OrderStatus, Email, $filter){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	Order.find({
		filter: { include: ['customer','orderStatus'] }
	}).$promise
		.then(function(response) { 
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
	$scope.foundOrder = ord;
   Order.findById({id:ord.id,
		filter: {include:[{salesOrders:['salesOrderStatus',{salesOrderLines:'item'}]}]}
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
   $scope.acceptSO = function(so){
		/*SalesOrder.deliveryChalan.create(
		{id:so.id},
		{
			salesOrderId:so.id,
			customerId: so.customerId
		});*/
		DeliveryChalan.create({
			salesOrderId:so.id,
			customerId: so.customerId
		});
		SalesOrder.prototype$updateAttributes(
		   { id: so.id }, 
		   { salesOrderStatusId: '2' }
		 );
		 so.salesOrderStatusId = 2;
		 so.salesOrderStatus = SalesOrderStatus.findById({id:2});
		 angular.forEach($scope.salesOrders, function (tempSO) {
			 if(tempSO.id == so.id){
				 tempSO.salesOrderStatusId = 2;
				 tempSO.salesOrderStatus = so.salesOrderStatus;
			 }
		  });
		 var partial = false;
		 angular.forEach($scope.salesOrders, function (tempSO) {
			 if(tempSO.salesOrderStatusId!=2 && tempSO.id!=so.id){
				partial = true;
			 }
		  });
		  if(partial){
			Order.prototype$updateAttributes(
			   { id: so.orderId }, 
			   { orderStatusId: '3' }
			 );
			 $scope.foundOrder.orderStatusId = 3;
			 //$scope.foundOrder.orderStatus = OrderStatus.findById({id:'3'});
		  } else {
			Order.prototype$updateAttributes(
			   { id: so.orderId }, 
			   { orderStatusId: '2' }
			 );
			 $scope.foundOrder.orderStatusId = 2;
			 //$scope.foundOrder.orderStatus = OrderStatus.findById({id:'2'});
		  }
		   Order.findById({id:so.orderId,
			filter: {include:[{salesOrders:['salesOrderStatus',{salesOrderLines:'item'}]}]}
			}).$promise
				.then(function(response) { 
				  if(response.length==0){
						 $scope.subError = "No data found!!!";
					 }
					 else{
						$scope.selectedOrder = response;
						$scope.salesOrders = response.salesOrders;
						$scope.selectedSalesOrder = so;
						$scope.selectedSalesOrder.deliveryDate = so.deliveryDate;
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
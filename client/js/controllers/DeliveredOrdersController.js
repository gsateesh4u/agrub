app.controller('DeliveredOrdersController', function($scope,Order, OrderStatus, commonService, Email, $filter, $modal){
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
	$scope.viewInvoice = function viewInvoice(ord){
		Order.findById({
			id : ord.id,
			filter : {
				include : [ {lineItems:[{item:'itemCategory'},'uom']}, 'orderStatus','customer']
			}
		}).$promise.then(function(foundOrd){
			var modalInstance = $modal.open({
				templateUrl : 'invoice.html',
				controller : 'InvoiceCtrl',
				backdrop : 'static',
				windowClass: 'large',
				backdropClick : true,
				dialogFade : false,
				keyboard : true,
				scope : $scope,
				resolve : {
					order : function() {
						return foundOrd;
					}
				}
			});
		});
	};
	$scope.backToMainMenu = function backToMainMenu(){
		$scope.viewOrder = false;
	};
});
app.controller('InvoiceCtrl', function($scope, order,
		$modalInstance, Order, $rootScope) {
	$scope.order = order;
	angular.forEach($scope.order.lineItems, function(lineItem, itr){
		if(!lineItem.custUpdatedItemQuantity || lineItem.custUpdatedItemQuantity == null || lineItem.custUpdatedItemQuantity === 0){
			lineItem.custUpdatedItemQuantity = lineItem.lineItemQuantity;
		}
	});
	$scope.PrintPartOfPage = function PrintPartOfPage(dvprintid) {
	      var prtContent = document.getElementById(dvprintid);
	      var popupWin = window.open('', '_blank', '');
	        popupWin.document.open();
	        popupWin.document.write('<html><title>::Preview::</title><link rel="stylesheet" type="text/css" href="css/invoice.css" />'+
	        		'<link href="css/bootstrap.css" rel="stylesheet"></head><body onload="window.print()">')
	        popupWin.document.write(prtContent.innerHTML);
	        popupWin.document.write('</html>');
	        popupWin.document.close();
	 };
	 $scope.getSubTotal = function getSubTotal(){
		 var total = 0;
			angular.forEach($scope.order.lineItems, function(lineItem,itr){
				if(lineItem.itemPrice){
					total = total + (lineItem.itemPrice * lineItem.custUpdatedItemQuantity);
				}
			});
			$scope.subTotal = total;
			return total;
	 };
	 $scope.getTax = function getTax(){
		 $scope.tax = ($scope.subTotal)/(50);
		 return $scope.tax;
	 };
	 $scope.getTotal = function getTotal(){
		return $scope.subTotal + $scope.tax;
	 };
	 $scope.getBoarderColor = function getBoarderColor(price){
			if(price && price > 0 && price <= 10000){
					return "";
			}else{
				return "having-error";
			}
		};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
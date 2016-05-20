app
		.controller(
				'SalesOrderController',
				function($rootScope, $scope, Order, OrderStatus, Hub, Email,LineItem, Vendor,
						$filter, $modal) {
					$scope.rowCollection = [];
					$scope.itemsByPage = 10;
					$scope.isLoading = true;
					$scope.showPage = 'main';
					$scope.dates = {
						today : new Date(),
						start : new Date(),
						end : new Date()
					};
					$scope.open = {
						start : false,
						end : false
					};

					$scope.init = function init() {
						OrderStatus.findOne({
							filter : {
								where : {
									name : 'SO'
								}
							}
						}).$promise
								.then(function(poStatus) {
									Order.find({
										filter : {
											include : [ 'customer',
													'lineItems', 'orderStatus',
													'user' ],
											where : {
												orderStatusId : poStatus.id
											}
										}
									}).$promise
											.then(
													function(response) {
														$scope.soCollection = []
																.concat(response);
														if ($scope.soCollection.length == 0) {
															$scope.error = "No data found!!!";
														}
														$scope.isLoading = false;
													},
													function(errorMessage) {
														$scope.error = "Error has occurred while loading sales orders!";
														$scope.isLoading = false;
													});
								});
					};
					$scope.init();
					$rootScope.reLoadSOs = function reLoadSOs() {
						$scope.init();
					};
					$scope.selectAllOrders = function selectAllOrders() {
						angular.forEach($scope.soCollection, function(so) {
							so.selected = $scope.all;
						});
					};
					$scope.disableAssignPOButton = function disableAssignPOButton() {
						var flag = true;
						angular.forEach($scope.soCollection, function(so) {
							if (so.selected) {
								flag = false;
							}
						});
						return flag;
					};
					$scope.showOrderDetails = function showOrderDetails(ord) {
						$scope.foundOrder = ord;
						Order.findById({
							id : ord.id,
							filter : {
								include : [ {
									salesOrderLines : 'item'
								}, 'orderStatus' ]
							}
						}).$promise
								.then(
										function(response) {
											if (response.length == 0) {
												$scope.subError = "No data found!!!";
											} else {
												$scope.selectedOrder = response;
												$scope.salesOrders = response.salesOrders;
											}
											$scope.isSubLoading = false;
										},
										function(errorMessage) {
											$scope.subError = "Error has occurred while loading order details!";
											$scope.isSubLoading = false;
										});
					};
					$scope.cancel = function resetSelectedOrder() {
						$scope.selectedOrder = null;
						$scope.salesOrders = null;
					}
					$scope.assignSOsToVendor = function assignSOsToVendor() {
						var selectedSOs = [];
						angular.forEach($scope.soCollection, function(so) {
							if (so.selected) {
								selectedSOs.push(so);
							}
						});
						Hub.whvendors({
							hubId : $scope.soCollection
						}).$promise.then(function(users) {
							alert(angular.toJson(users));
						});
					};
					$scope.assigSOToVendor = function assigSOToVendor() {
						Hub.whvendors({
							hubId : $scope.selSO.customer.hubId
						}).$promise.then(function(response) {
							if (response && response.vendors) {
								$scope.vendors = response.vendors;
								var modalInstance = $modal.open({
									templateUrl : 'assignVendorsmodal.html',
									controller : 'AssignVendorsCtrl',
									backdrop : 'static',
									backdropClick : true,
									dialogFade : false,
									keyboard : true,
									scope : $scope,
									resolve : {
										vendors : function() {
											return $scope.vendors;
										},
										so : function() {
											return $scope.selSO;
										}
									}
								});
							}
						});
					};
					$scope.$watch('sos', function(row) {
						var flag = false;
						row.filter(function(r) {
							if (r.isSelected) {
								flag = true;
								$scope.selSO = r;
							}
						});
						if (!flag) {
							$scope.selSO = null;
						}
					}, true);
					$scope.showCustomerInfo = function showCustomerInfo(
							orderObj) {
						var modalInstance = $modal.open({
							templateUrl : 'views/templates/customer-info.html',
							controller : 'ShowCustomerInfoCtrl',
							backdrop : 'static',
							backdropClick : true,
							dialogFade : false,
							keyboard : true,
							scope : $scope,
							resolve : {
								order : function() {
									return orderObj;
								}
							}
						});
					};
					$scope.editOrder = function editOrder() {
						if (!$scope.selSO != null) {
							Order.findOne({
								filter : {
									include : [ 'customer', {
										lineItems : [ {
											item : 'itemCategory'
										}, 'uom' ]
									}, 'orderStatus', 'user' ],
									where : {
										id : $scope.selSO.id
									}
								}
							}).$promise.then(function(fullSO) {
								if (fullSO) {
									$scope.showPage = 'editOrder';
									$scope.selectedOrder = fullSO;
								}
							});
						}
					};
					$scope.editItemQtyAndUom = function editItemQtyAndUom(item) {
						$scope.itemToEdit = item;
						var modalInstance = $modal
								.open({
									templateUrl : 'views/templates/edit-item-quantity-and-uom.html',
									controller : 'EditItemQtyAndUomCtrl',
									backdrop : 'static',
									backdropClick : true,
									dialogFade : false,
									keyboard : true,
									scope : $scope,
									resolve : {
										itemToEdit : function() {
											return $scope.itemToEdit;
										}
									}
								});
					};
					$scope.backToMainMenu = function backToMainMenu() {
						$scope.showPage = 'main';
						$scope.selSO = null;
						$scope.selectedOrder = null;
					};

					$scope.showConsolidatedView = function() {
						/*
						 * var modalInstance = $modal.open({ templateUrl :
						 * 'consolidatedView.html', controller :
						 * 'ConsolidatedViewCtrl', backdrop: 'static',
						 * backdropClick: true, dialogFade: false, keyboard:
						 * true, scope : $scope, resolve : { sos : function (){
						 * return $scope.soCollection; } } });
						 */
						Hub.find().$promise.then(function(response){
							$scope.hubs = [].concat(response);
							$scope.showPage = 'supplier';
						});
						
					};
					$scope.selectAllItems = function selectAllItems(){
						angular.forEach($scope.lineItems,function(item){
							item.selected = $scope.all;
						});
				   };
					$scope.openCalendar = function(e, date) {
						e.preventDefault();
						e.stopPropagation();
						$scope.open[date] = true;
					};
					$scope.getAllItems = function() {
						$scope.lineItems = [];
						var lineItemIds = [];
						angular.forEach($scope.soCollection, function(so, i) {
							var dt1 = $filter('date')(so.deliveryDate,
									"yyyy-MM-dd");
							var dt2 = $filter('date')($scope.dates.start,
									"yyyy-MM-dd");
							if (dt1 === dt2 && so.customer.hubId === $scope.selectedHub.id) {
								angular.forEach(so.lineItems, function(
										tLineItem, itr) {
									lineItemIds.push(tLineItem.id);
								});
							}

						});
						if (lineItemIds.length > 0) {
							LineItem.find({
								filter : {
									include : [ {
										item : 'itemCategory'
									}, 'uom' ],
									where : {
										id : {
											inq : lineItemIds
										}
									}
								}
							}).$promise.then(function(response) {
								var exLineItems = [].concat(response);
								angular.forEach(exLineItems, function(ex) {
									if (!isItemExist(ex)) {
										$scope.lineItems.push(ex);
									}
								});
							});
						} else {
							alert("No orders found for the selected delivery date");
						}
					};
					function isItemExist(exLineItem) {
						if ($scope.lineItems.length == 0) {
							return false;
						} else {
							var flag = false;
							angular
									.forEach(
											$scope.lineItems,
											function(lineItem, itr) {
												if (exLineItem.item.id === lineItem.item.id) {
													lineItem.lineItemQuantity = lineItem.lineItemQuantity
															+ exLineItem.lineItemQuantity;
													flag = true;
												}
											});
							return flag;
						}
					}
					;
				});
app.controller('ConsolidatedViewCtrl', function($scope, sos, $modalInstance,
		$filter, LineItem, Order, OrderStatus, OrderTracking, $rootScope) {
	$scope.sos = sos;
	$scope.dates = {
		today : new Date(),
		start : new Date(),
		end : new Date()
	};
	$scope.open = {
		start : false,
		end : false
	};
	$scope.openCalendar = function(e, date) {
		e.preventDefault();
		e.stopPropagation();
		$scope.open[date] = true;
	};
	$scope.getAllItems = function(date) {
		$scope.lineItems = [];
		var lineItemIds = [];
		angular.forEach($scope.sos, function(so, i) {
			var dt1 = $filter('date')(so.deliveryDate, "yyyy-MM-dd");
			var dt2 = $filter('date')($scope.dates.start, "yyyy-MM-dd");
			if (dt1 === dt2) {
				angular.forEach(so.lineItems, function(tLineItem, itr) {
					lineItemIds.push(tLineItem.id);
				});
			}

		});
		if (lineItemIds.length > 0) {

		} else {
			alert("No orders found for the selected delivery date");
		}
		LineItem.find({
			filter : {
				include : [ {
					item : 'itemCategory'
				}, 'uom' ],
				where : {
					id : {
						inq : lineItemIds
					}
				}
			}
		}).$promise.then(function(response) {
			var exLineItems = [].concat(response);
			angular.forEach(exLineItems, function(ex) {
				if (!isItemExist(ex)) {
					$scope.lineItems.push(ex);
				}
			});
		});
	};
	function isItemExist(exLineItem) {
		if ($scope.lineItems.length == 0) {
			return false;
		} else {
			var flag = false;
			angular.forEach($scope.lineItems, function(lineItem, itr) {
				if (exLineItem.item.id === lineItem.item.id) {
					lineItem.lineItemQuantity = lineItem.lineItemQuantity
							+ exLineItem.lineItemQuantity;
					flag = true;
				}
			});
			return flag;
		}
	}
	;
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
app.controller('AssignVendorsCtrl', function($scope, vendors, so,
		$modalInstance, Order, OrderStatus, OrderTracking, $rootScope) {
	$scope.vendors = vendors;
	$scope.so = so;
	$scope.assignSelctedVendor = function assignSelctedVendor() {
		OrderStatus.findOne({
			filter : {
				where : {
					name : 'DC'
				}
			}
		}).$promise.then(function(dcStatus) {
			Order.prototype$updateAttributes({
				id : $scope.so.id
			}, {
				orderStatusId : dcStatus.id
			});
			var orderTracking = {
				userId : $scope.selectedVendor.id,
				orderId : $scope.so.id,
				orderStatusId : dcStatus.id,
				timestamp : new Date()
			};
			OrderTracking.create(orderTracking).$promise.then(function(data) {
				$modalInstance.dismiss('cancel');
				$rootScope.reLoadSOs();
			});
		});
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
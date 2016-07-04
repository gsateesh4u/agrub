app
		.controller(
				'SalesOrderController',
				function($rootScope, $scope, Order, OrderStatus, PurchaseOrder, Hub, Email, Uom, 
						LineItem, Vendor, TransportOperator, $filter, $modal) {
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
									$scope.soStatus = poStatus;
									Order.find({
										filter : {
											include : [ 'customer',
													'lineItems', 'orderStatus',
													'user' ,'transportOperator'],
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
														/*Uom.find().$promise.then(function(uoms){
															$scope.uoms = [].concat(uoms);
														});*/
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
									lineItems : 'item'
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
					$scope.assigSOTO = function assigSOTO(){
						TransportOperator.find({
							where : {
									hubId : $scope.selSO.customer.hubId
								}
						}).$promise.then(function(tos){
							$scope.transportOperators = [].concat(tos);
							var modalInstance = $modal.open({
								templateUrl : 'assignTOmodal.html',
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
										return $scope.selSO;
									}
								}
							});
						});
					};
					$scope.assigSOToVendor = function assigSOToVendor() {
						Vendor.find({
							filter : {
								include : ['users'],
								where : {
									hubId : $scope.selSO.customer.hubId
								}
							}
						}).$promise.then(function(response) {
							if (response && response.length>0) {
								$scope.vendors = [].concat(response);
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
						Hub.find().$promise.then(function(response){
							$scope.hubs = [].concat(response);
							if($scope.hubs && $scope.hubs.length > 0){
								$scope.selectedHub = $scope.hubs[0];
							}
							$scope.showPage = 'supplier';
						});
						$scope.deliveryDates = [];
						angular.forEach($scope.soCollection,function(so){
							 if(so.orderStatusId === $scope.soStatus.id){
								 if($scope.deliveryDates.indexOf(so.deliveryDate) === -1){
									 $scope.deliveryDates.push(so.deliveryDate); 
								 }
							 }
						});
					};
					$scope.disableAssignSupplier = function(){
						var flag = true;
						var isValidQty = true;
						angular.forEach($scope.lineItems,function(item){
							if(item.selected){
								if(!item.assignQty || item.assignQty <= 0 || item.assignQty > item.lineItemQuantity){
									isValidQty = false;
								}
								flag = false;
							}
						});
						if(flag === false && isValidQty === true){
							return false;
						}else{
							return true;
						}
					};
					$scope.showSuppliers = function showSuppliers(){
						var selItems = [];
						angular.forEach($scope.lineItems,function(item,i){
							if(item.selected){
								selItems.push(item);
							}
						});
						if(selItems && selItems.length>0){
							Vendor.find({
								filter : {
									where : {
										hubId : $scope.selectedHub.id
									}
								}
							}).$promise.then(function(response){
								$scope.vendors = [].concat(response);
								var modalInstance = $modal.open({ 
									 templateUrl : 'consolidatedView.html', 
									 controller :  'ConsolidatedViewCtrl', 
									 backdrop: 'static',
									 backdropClick: true, 
									 dialogFade: false, 
									 keyboard:  true, 
									 scope : $scope, 
									 resolve : { 
										 lineItems : function (){
											 	return selItems; 
											 	},
										 vendors : function (){
											 return $scope.vendors;
										 },
										 deliveryDate : function (){
											 return $scope.selectedDt;
										 },
										 selectedHub : function (){
											 return $scope.selectedHub;
										 }
									 	} 
								 });
							});
						}else {
							alert("Please select atleast one item to assign");
						}
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
					$scope.getBoarderColor = function getBoarderColor(available, assignQty){
						if(assignQty && assignQty > 0){
							if(assignQty > available){
								return "having-error";
							}else{
								return '';
							}
						}else{
							return "having-error";
						}
					};
					$scope.getAllItems = function() {
						$scope.isLoading = true;
						$scope.lineItems = [];
						var lineItemIds = [];
						$scope.all = false;
						angular.forEach($scope.soCollection, function(so, i) {
							var dt1 = $filter('date')(so.deliveryDate,
									"yyyy-MM-dd");
							var dt2 = $filter('date')($scope.selectedDt,
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
								PurchaseOrder.find({
									filter : {
										include : ['purchaseOrderLines'],
										where : {
											deliveryDate : $scope.selectedDt
										}
									}
								}).$promise.then(function(pos){
									var exPos = [].concat(pos);
									if(exPos && exPos.length > 0){
										angular.forEach(exPos,function(po){
											angular.forEach(po.purchaseOrderLines,function(poLineItem){
												angular.forEach($scope.lineItems,function(tempLineItem){
													tempLineItem.totalQty = tempLineItem.lineItemQuantity;
													if(tempLineItem.item.id === poLineItem.itemId){
														tempLineItem.lineItemQuantity = tempLineItem.lineItemQuantity - poLineItem.quantity; 
													}
												});
											});
										});
									}else{
										angular.forEach($scope.lineItems,function(tempLineItem){
												tempLineItem.totalQty = tempLineItem.lineItemQuantity;
										});
									}
									
									$scope.lineItems2 = [].concat($scope.lineItems);
									$scope.lineItems = [];
									angular.forEach($scope.lineItems2,function(t){
										if(t.lineItemQuantity > 0 ){
											t.assignQty = t.lineItemQuantity;
											$scope.lineItems.push(t);
										}
									});
									$scope.isLoading = false;
								});
							});
						} else {
							$scope.isLoading = false;
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
});
app.controller('ConsolidatedViewCtrl', function($scope,$http, lineItems, vendors, deliveryDate,selectedHub, $modalInstance,
		$filter, LineItem, Order, Email, PurchaseOrder,PurchaseOrderLine, commonService, OrderStatus, OrderTracking, $rootScope) {
	$scope.lineItems = lineItems;
	$scope.vendors = vendors;
	$scope.assignPO =  function assignPO(){
		 if(commonService.getCurrentUser() == null || commonService.getCurrentUser().id == null){
			   alert("Not a valid user");
		   }else{
			   var po = {
					deliveryDate : deliveryDate,
					generatedDate : new Date(),
					supplierId : $scope.supplier.id,
					receiverId : $scope.receiver.id,
					userId : commonService.getCurrentUser().id
			   };
			   PurchaseOrder.create(po).$promise.then(function(newPo){
				   angular.forEach($scope.lineItems,function(it,i){
					  var lineIt = {
						quantity : it.assignQty,
						comments : '',
						purchaseOrderId : newPo.id,
						uomId : it.uomId,
						itemId : it.item.id
					  } ;
					  PurchaseOrderLine.create(lineIt).$promise.then(function(data){
						  
					  });
				   });
				   var opts = {
						   from : 'agrubcare@gmail.com',
							to : $scope.supplier.email,
							subject : 'Purchase Order #'+newPo.id,
							text : 'Purchase Order',
							html : 'Hi '+$scope.supplier.name+', \n A new Purchase Order with id <b>#'+newPo.id
							+ '</b> has been generated. Please deliver goods to <b> '+ $scope.receiver.name +'</b>. at '+
							'\n Name : <b>'+$scope.receiver.name+'</b>\n'+
							'\n Address1 : <b>'+$scope.receiver.address1+'</b>\n'+
							'\n Address2 : <b>'+$scope.receiver.address2+'</b>\n'+
							'\n City : <b>'+$scope.receiver.city+'</b>\n'+
							'\n State : <b>'+$scope.receiver.state+'</b>\n'+
							'\n Phone : <b>'+$scope.receiver.phone+'</b>\n'
					}
				   $http({
					    method: 'POST',
					    url: '/api/Orders/sendEmail',
					    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					    transformRequest: function(obj) {
					        var str = [];
					        for(var p in obj)
					        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					        return str.join("&");
					    },
					    data: {options:JSON.stringify(opts)}
					}).success(function(dt){
					   
				   });
				   opts = {
						   from : 'agrubcare@gmail.com',
							to : $scope.receiver.email,
							subject : 'Purchase Order #'+newPo.id,
							text : 'Purchase Order',
							html : 'Hi '+$scope.receiver.name+', \n A new Purchase Order with id <b>#'+newPo.id
							+ '</b> has been generated. Please collect goods from <b> '+ $scope.supplier
					}
				   $http({
					    method: 'POST',
					    url: '/api/Orders/sendEmail',
					    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
					    transformRequest: function(obj) {
					        var str = [];
					        for(var p in obj)
					        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
					        return str.join("&");
					    },
					    data: {options:JSON.stringify(opts)}
					}).success(function(dt){
					   
				   });
				$scope.getAllItems();
				$modalInstance.dismiss('cancel');
			   });
		   }
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
app.controller('AssignVendorsCtrl', function($scope, vendors, so,
		$modalInstance, Order, OrderStatus, OrderTracking, $rootScope) {
	$scope.vendors = vendors;
	$scope.so = so;
	$scope.populateUsers = function populateUsers(){
		$scope.users = [].concat($scope.selectedVendor.users);
	};
	$scope.assignSelctedVendor = function assignSelctedVendor() {
		if($scope.selectedVendor && $scope.selectedUser){
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
					userId : $scope.selectedUser.id,
					orderId : $scope.so.id,
					orderStatusId : dcStatus.id,
					timestamp : new Date()
				};
				OrderTracking.create(orderTracking).$promise.then(function(data) {
					$modalInstance.dismiss('cancel');
					$rootScope.reLoadSOs();
				});
			});
		} else {
			alert("Please select vendor and user");
		}
		
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
app.controller('AssignTOCtrl', function($scope,$http, transportOperators, so,
		$modalInstance, Order, Email, $rootScope) {
	$scope.transportOperators = transportOperators;
	$scope.so = so;
	$scope.assignSelctedTO = function assignSelctedTO() {
		if($scope.selectedTO){
			Order.prototype$updateAttributes({
				id : $scope.so.id
			}, {
				transportOperatorId : $scope.selectedTO.id
			});
			var opts = {
					   from : 'agrubcare@gmail.com',
						to : $scope.selectedTO.email,
						subject : 'Delivery Challan #'+$scope.so.id,
						text : 'Delivery Challan',
						html : 'Hi '+$scope.selectedTO.name+', \n A new Delivey Challan with id <b>#'+$scope.so.id
						+ '</b> has been generated. Please deliver goods to <b> '+ $scope.so.shippingAddress.name +'</b>. at '+
						'\n Name : <b>'+$scope.so.shippingAddress.name+'</b>\n'+
						'\n Address1 : <b>'+$scope.so.shippingAddress.address1+'</b>\n'+
						'\n Address2 : <b>'+$scope.so.shippingAddress.address2+'</b>\n'+
						'\n City : <b>'+$scope.so.shippingAddress.city+'</b>\n'+
						'\n State : <b>'+$scope.so.shippingAddress.state+'</b>\n'+
						'\n Phone : <b>'+$scope.so.shippingAddress.phone+'</b>\n'
				}
			$http({
			    method: 'POST',
			    url: '/api/Orders/sendEmail',
			    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
			    transformRequest: function(obj) {
			        var str = [];
			        for(var p in obj)
			        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
			        return str.join("&");
			    },
			    data: {options:JSON.stringify(opts)}
			}).success(function(dt){
			   
		   });
			$modalInstance.dismiss('cancel');
		} else {
			alert("Please select transport operator");
		}
		
	};
	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
});
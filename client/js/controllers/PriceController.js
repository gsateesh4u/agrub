app.controller('PriceController', function($scope,commonService, DailyMktPrice, DailyMktPriceHistory, CustLkdItemPrice, 
		CustLkdPeriod, Hub, Market, Item, $filter, Uom){
	 $scope.dates = {
	    today: new Date(),
	    start: "",
	    end: ""
	  };
	  $scope.open = {
	    start: false,
	    end: false
	  };
	  // Disable weekend selection
	  $scope.disabled = function(date, mode) {
	    return (mode === 'day' && (new Date().toDateString() == date.toDateString()));
	  };
	  $scope.openCalendar = function(e, date) {
	      e.preventDefault();
	      e.stopPropagation();
	      $scope.open[date] = true;
	  };
	
	var tabClasses;
  $scope.selectedTab = 1;
  $scope.showPricesMenu = true;
  $scope.tempDMP = {
		itemId : "",
		minPrice : "",
		maxPrice : "",
		dmpDate : "",
		updatedTimestamp : "",
		marketId : ""
	};
  function initTabs() {
    tabClasses = ["","","",""];
  }
  
  $scope.getTabClass = function (tabNum) {
    return tabClasses[tabNum];
  };
  
  $scope.getTabPaneClass = function (tabNum) {
    return "tab-pane " + tabClasses[tabNum];
  }
  
  $scope.setActiveTab = function (tabNum) {
    initTabs();
	$scope.selectedTab = tabNum;
    tabClasses[tabNum] = "active";
	if(tabNum ==1){
		fillDMPTab();
	}else if(tabNum == 2){
		$scope.fillCustLkdPeriods();
	}else if(tabNum == 3){
		$scope.fillCustLkdPrices();
	}else if(tabNum == 4){
		fillDMPHTab();
	}
	$scope.showForm = 0;
	$scope.customers = null;
	$scope.selectedCustomer = null;
	$scope.markets = null;
	$scope.selectedMarket = null;
	$scope.hubs = null;
	$scope.items = null;
	$scope.selectedItem = null;
	$scope.selectedHub = null;
	$scope.minPrice = null;
	$scope.maxPrice = null;
  };
 
  //Initialize 
  initTabs();
  $scope.setActiveTab(1);
  
  Uom.find().$promise.then(function(uoms){
	  $scope.uoms = [].concat(uoms);
  });
  
  function fillDMPTab(){
	$scope.dmpsCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.groupProperty = 'item.itemCategory.name';
	DailyMktPrice.find({
		filter: { include: [{item:['itemCategory','uom']},{market:'hub'},'uom'] }
	}).$promise
		.then(function(response) { 
		  $scope.dmpsCollection = [].concat(response);
		  if($scope.dmpsCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading prices!";
		  $scope.isLoading = false;
   });
  };
  function fillDMPHTab(){
	$scope.dmphsCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.groupProperty = 'item.itemCategory.name';
	DailyMktPriceHistory.find({
		filter: { include: [{item:['itemCategory','uom']},{market:'hub'},'uom'] }
	}).$promise
		.then(function(response) { 
		  $scope.dmphsCollection = [].concat(response);
		  if($scope.dmphsCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading prices history!";
		  $scope.isLoading = false;
   });
  };
	$scope.fillCustLkdPrices = function fillCustLkdPrices(){
		$scope.custPricesCollection = [];
		$scope.itemsByPage = 10;
		$scope.isLoading = true;
		CustLkdItemPrice.find({
			filter: { include: ['customer','item','custLkdPeriod','hub','uom'] }
		}).$promise
			.then(function(response) { 
			  $scope.custPricesCollection = [].concat(response);
			  if($scope.custPricesCollection.length==0){
					 $scope.error = "No data found!!!";
				 }
				 $scope.isLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading customer locked prices!";
			  $scope.isLoading = false;
	   });
  };
  $scope.fillCustLkdPeriods = function fillCustLkdPeriods(){
		$scope.custPeriodsCollection = [];
		$scope.itemsByPage = 10;
		$scope.isLoading = true;
		CustLkdPeriod.find({
			filter: { include: [{customer:'hub'}] }
		}).$promise
			.then(function(response) { 
			  $scope.custPeriodsCollection = [].concat(response);
			  if($scope.custPeriodsCollection.length==0){
					 $scope.error = "No data found!!!";
				 }
				 $scope.isLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading prices!";
			  $scope.isLoading = false;
	   });
  };
   $scope.updateMinPrice = function updateMinPrice(updatedPrice, row){
	   if(commonService.getCurrentUser() == null || commonService.getCurrentUser().id == null){
		   alert("Not a valid user");
	   }else{
		   if(updatedPrice!="" && updatedPrice!=null && updatedPrice!=row.minPrice){
				DailyMktPrice.prototype$updateAttributes(
				   { id: row.id }, 
				   { minPrice: updatedPrice, userId : commonService.getCurrentUser().id }
				 );
			}
	   }
		
   };
    $scope.updateMaxPrice = function updateMaxPrice(updatedPrice, row){
    	if(commonService.getCurrentUser() == null || commonService.getCurrentUser().id == null){
 		   alert("Not a valid user");
 	   }else{
 		  if(updatedPrice!="" && updatedPrice!=null && updatedPrice!=row.maxPrice){
 				DailyMktPrice.prototype$updateAttributes(
 				   { id: row.id }, 
 				   { maxPrice: updatedPrice, userId : commonService.getCurrentUser().id }
 				 );
 			}
 	   }
		
   };
   $scope.updateCustPrice = function updateCustPrice(updatedPrice, row){
		if(updatedPrice!=row.price){
			CustLkdItemPrice.prototype$updateAttributes(
			   { id: row.id }, 
			   { price: updatedPrice }
			 );
		}
   };
    $scope.deleteCustPrice = function deleteCustPrice(row){
		 var flag = confirm("Do you really want to delete locked price for  "+row.customer.name+" ?");
	   if(flag){
		   CustLkdItemPrice.deleteById({id:row.id}).$promise
				.then(function(response) { 
				 $scope.showForm = 0;
				$scope.setActiveTab(3);
			  },function( errorMessage ) {
				  $scope.error = "Error has occurred while deleting customer locked period!";
		   });
	   }
   };
   $scope.deleteDMP = function deleteDMP(row){
	   if(commonService.hasPermission('pricing')){
		   var flag = confirm("Do you really want to delete daily market price for  "+row.item.name+" ?");
		   if(flag){
			   DailyMktPrice.deleteById({id:row.id}).$promise
					.then(function(response) { 
					 $scope.showForm = 0;
					$scope.setActiveTab(1);
				  },function( errorMessage ) {
					  $scope.error = "Error has occurred while deleting daily market price!";
			   });
		   }  
	   }
   };
   $scope.showUpdateDMP = function showUpdateDMP(row){
	   if(commonService.hasPermission('pricing')){
		  $scope.hubs = [].concat(row.market.hub);
		  $scope.markets = [].concat(row.market);
		  $scope.items = [].concat(row.item);
		  $scope.selectedHub = row.market.hub;
		  $scope.selectedMarket = row.market;
		  $scope.selectedItem = row.item;
		  $scope.selectedUom = row.uom;
		  $scope.uomQty = row.uomQty;
		  $scope.minPrice = row.minPrice;
		  $scope.maxPrice = row.maxPrice;
		  $scope.dmpHeader = 'Update';
		  $scope.isDmpLoading = false;
		  $scope.showForm = 1;
		  $scope.dmpToUpdate = row;
	   }
   };
   $scope.showDMP = function(){
	   $scope.dmpHeader = 'Add';
		if(commonService.hasPermission('pricing')){
			$scope.isDmpLoading = true;
			$scope.selectedMarket = null;
			$scope.selectedItem = null;
			$scope.selectedHub = null;
			$scope.markets = [];$scope.items = []; $scope.hubs = [];
			Hub.find().$promise
				.then(function(response) { 
					$scope.hubs  = [].concat(response);
					$scope.isDmpLoading = false;
					$scope.showForm = 1;
				},function( errorMessage ) {
					$scope.showForm = 1;
				  $scope.subError = "Error has occurred while loading hubs!";
				  $scope.isDmpLoading = false;
			});
		}
   };
   $scope.showCLP = function(){
		$scope.showForm = 3;
		$scope.isClpLoading = true;
		CustLkdPeriod.find({
			filter: { include: [{customer:'hub'}] }
		}).$promise
			.then(function(response) { 
			  $scope.custPeriodsCollection = [].concat(response);
			  $scope.customers = [];
			  angular.forEach($scope.custPeriodsCollection,function(ex){
				$scope.customers.push(ex.customer);
				if($scope.selectedCustomerId && $scope.selectedCustomerId == ex.customer.id){
					$scope.selectedCustomer = ex.customer;
					$scope.selectedHub.name = ex.hub.name;
				}
			  });
			  
			  if($scope.customers.length==0){
					 $scope.subError = "No data found!!!";
				 }
				 $scope.isClpLoading = false;
		  },function( errorMessage ) {
			  $scope.subError = "Error has occurred while loading customers!";
			  $scope.isClpLoading = false;
	   });
   };
   $scope.showLokedPeriods = function showLokedPeriods(){
		$scope.showForm = 2;
		$scope.header = 'Add';
		$scope.isClLoading = true;
		Hub.find({
			filter: { include: ['customers'] }
		}).$promise
			.then(function(response) { 
			  $scope.hubs = [].concat(response);
			  if($scope.hubs.length==0){
					 $scope.subError = "No hubs defined!!!";
				 }
				 $scope.isClLoading = false;
		  },function( errorMessage ) {
			  $scope.subError = "Error has occurred while loading hubs!";
			  $scope.isClLoading = false;
	   });
   };
   $scope.showRemainingCustomers = function showRemainingCustomers(){
		if($scope.selectedHub){
			angular.forEach($scope.hubs,function(hub){
				if(hub.id == $scope.selectedHub.id){
					$scope.customers = hub.customers;
					return;
				}
			});
			$scope.customers = $filter('filter')($scope.customers,
					function(exItem, index) {
						var flag = true;
						angular.forEach($scope.custPeriodsCollection, function (tCLP) {
						 if((exItem.id == tCLP.customerId)){
							flag = false;
							return;
						 }
				      });
					  return flag;
				  	});
		}
   };
   $scope.showRemainingItems = function showRemainingItems(){
	if($scope.selectedCustomer){
		$scope.selectedHub = $scope.selectedCustomer.hub;
			$scope.isClpLoading = true;
			Item.find({
			   filter:{
				  where:{hubId: $scope.selectedHub.id}  
			   }
		   }).$promise
		   .then(function(response){
				$scope.isClpLoading = false;
				$scope.existing = [].concat(response);
				$scope.items = $filter('filter')($scope.existing,
					function(exItem, index) {
						var flag = true;
						angular.forEach($scope.custPricesCollection, function (tCLP) {
						 if((tCLP.hub.id == $scope.selectedHub.id && exItem.id == tCLP.item.id)){
							flag = false;
							return;
						 }
				      });
					  return flag;
				  	});
		   },function( errorMessage ) {
				  $scope.subError = "Error has occurred while loading items!";
				  $scope.isClpLoading = false;
			});
		}
   };
   $scope.addNewCustomerItemPrice = function addNewCustomerItemPrice(){
		var custLkdPeriodId = null;
		angular.forEach($scope.custPeriodsCollection,function(custPrice){
			if(custPrice.customerId == $scope.selectedCustomer.id){
				custLkdPeriodId = custPrice.id;
				return;
			}
		});
		if(custLkdPeriodId){
			var custLkdPrice = {
			price : $scope.price,
			itemId : $scope.selectedItem.id,
			hubId : $scope.selectedCustomer.hubId,
			customerId : $scope.selectedCustomer.id,
			custLkdPeriodId : custLkdPeriodId
			};
			CustLkdItemPrice.create(custLkdPrice).$promise.then(function(response){
				$scope.showForm = 0;
				$scope.setActiveTab(3);
			},function( errorMessage ) {
					  $scope.subError = "Error has occurred while adding customer lokced item price!";
			});
		}
   };
   $scope.populateMarkets = function populateMarkets(){
		if($scope.selectedHub){
			$scope.isDmpLoading = true;
			Market.find({
			   filter:{
				  where:{hubId: $scope.selectedHub.id}  
			   }
		   }).$promise
		   .then(function(response){
				$scope.isDmpLoading = false;
				$scope.markets = [].concat(response);
		   },function( errorMessage ) {
				  $scope.subError = "Error has occurred while loading markets!";
				  $scope.isDmpLoading = false;
			});
		}
   };
   $scope.populateItems = function populateItems(){
		if($scope.selectedHub){
			$scope.isDmpLoading = true;
			Item.find({
			   filter:{
				   include:['uom'],
				  where:{hubId: $scope.selectedHub.id}  
			   }
		   }).$promise
		   .then(function(response){
				$scope.isDmpLoading = false;
				$scope.existing = [].concat(response);
				$scope.items = $filter('filter')($scope.existing,
					function(exItem, index) {
						var flag = true;
						angular.forEach($scope.dmpsCollection, function (tDMP) {
						 if((tDMP.market.id == $scope.selectedMarket.id && tDMP.market.hub.id == $scope.selectedHub.id && exItem.id == tDMP.item.id)){
							flag = false;
							return;
						 }
				      });
					  return flag;
				  	});
		   },function( errorMessage ) {
				  $scope.subError = "Error has occurred while loading items!";
				  $scope.isDmpLoading = false;
			});
		}
   };
   $scope.populateUom = function populateUom(){
	if($scope.selectedItem && $scope.selectedItem.uomId){
		$scope.selectedUom = $scope.selectedItem.uom;
		//$scope.selectedUom.id = $scope.selectedItem.uomId;
		$scope.uomQty = $scope.selectedItem.uom.quantity;
	}
   };
   $scope.addUpdateItemPrice = function addUpdateItemPrice(){
	   if (commonService.getCurrentUser() == null
			|| commonService.getCurrentUser().id == null) {
		alert("Not a valid user");
	} else {
		var insertDMP = {
			itemId : $scope.selectedItem.id,
			minPrice : $scope.minPrice,
			maxPrice : $scope.maxPrice,
			dmpDate : new Date(),
			updatedTimestamp : new Date().getTime(),
			marketId : $scope.selectedMarket.id,
			userId : commonService.getCurrentUser().id,
			uomId : $scope.selectedUom.id,
			uomQty : $scope.uomQty
		};
		if($scope.dmpHeader == 'Add'){
			DailyMktPrice.create(insertDMP).$promise
			.then(
					function(response) {
						$scope.showForm = 0;
						$scope.setActiveTab(1);
					},
					function(errorMessage) {
						$scope.subError = "Error has occurred while adding dmp!";
					});
		}
		if($scope.dmpHeader == 'Update'){
			insertDMP.id = $scope.dmpToUpdate.id;
			DailyMktPrice.upsert(insertDMP).$promise
			.then(
					function(response) {
						$scope.showForm = 0;
						$scope.setActiveTab(1);
					},
					function(errorMessage) {
						$scope.subError = "Error has occurred while adding dmp!";
					});	
		};
		
	}
   };
   $scope.showUpdateCustLkdPeriod = function showUpdateCustLkdPeriod(custLkdPeriod, header){
		$scope.header = header;
		$scope.showForm = 2;
		$scope.selectedLkdPeriod = custLkdPeriod;
		$scope.dates.start = custLkdPeriod.startDate;
		$scope.dates.end = custLkdPeriod.endDate;
		$scope.selectedHub = {};
		$scope.selectedCustomer = custLkdPeriod.customer;
   };
   $scope.updateCustLkdPeriod = function updateCustLkdPeriod(){
		$scope.selectedLkdPeriod.startDate = $filter('date')($scope.dates.start, "yyyy-MM-dd");
		$scope.selectedLkdPeriod.endDate = $filter('date')($scope.dates.end, "yyyy-MM-dd");
		CustLkdPeriod.upsert($scope.selectedLkdPeriod).$promise.then(function(response){
			$scope.showForm = 0;
			$scope.setActiveTab(2);
			},function( errorMessage ) {
					  $scope.subError = "Error has occurred while updating customer locked period!";
			});
   };
   $scope.deleteCustLkdPeriod = function deleteCustLkdPeriod(row){
		 var flag = confirm("Do you really want to delete locked period for  "+row.customer.name+" ?");
	   if(flag){
		   CustLkdPeriod.deleteById({id:row.id}).$promise
				.then(function(response) { 
				 $scope.showForm = 0;
				$scope.setActiveTab(2);
			  },function( errorMessage ) {
				  $scope.error = "Error has occurred while deleting customer locked period!";
		   });
	   }
   };
   $scope.addUpdateCustomerLkdPeriod = function addUpdateCustomerLkdPeriod(header){
		if(header == 'Add'){
			$scope.addNewCustomerLkdPeriod();
		}else if(header == 'Update'){
			$scope.updateCustLkdPeriod();
		}
   };
   $scope.addNewCustomerLkdPeriod = function addNewCustomerLkdPeriod(){
		var insertLkdPeriod = {
		startDate : $filter('date')($scope.dates.start, "yyyy-MM-dd"),
		endDate : $filter('date')($scope.dates.end, "yyyy-MM-dd"),
		customerId : $scope.selectedCustomer.id
	};
	CustLkdPeriod.create(insertLkdPeriod).$promise.then(function(response){
			$scope.showForm = 0;
			$scope.setActiveTab(2);
		},function( errorMessage ) {
				  $scope.subError = "Error has occurred while adding customer locked period!";
		});
   };
   $scope.cancel = function(){
	   $scope.showForm = 0;
   };
   $scope.$watch('custppCollection', function(row) {
	   var flag = false;
	   row.filter(function(r) {
		  if (r.isSelected) {
			  flag = true;
			  $scope.selectedCustomerId = r.customerId;
			  $scope.selectedHubId = r.hubId;
			  $scope.selectedLkdPeriodId = r.custLkdPeriodId;
		  }
	   });
	   if(!flag){
		  $scope.selectedCustomerId = null;
		  $scope.selectedHubId = null;
		  $scope.selectedLkdPeriodId = null;
	   }
	 }, true);
	 $scope.$watch('custpCollection', function(row) {
	   var flag = false;
	   row.filter(function(r) {
		  if (r.isSelected) {
			  flag = true;
			  $scope.lktPId = r.id;
			  $scope.lktPStDt = r.startDate;
			  $scope.lktPEndDt = r.endDate;
			  $scope.lkdPCustId = r.customerId;
			  $scope.lkdPHubId = r.customer.hubId;
			  $scope.lkdPHubName = r.customer.hub.name;
			  $scope.lkdPCustName = r.customer.name;
		  }
	   });
	   if(!flag){
			  $scope.lktPId = null;
			  $scope.lktPStDt = null;
			  $scope.lktPEndDt = null;
			  $scope.lkdPCustId = null;
			  $scope.lkdPHubId = null;
			  $scope.lkdPHubName = null;
			  $scope.lkdPCustName = null;
	   }
	 }, true);
	 $scope.showManageCustLkdPrices = function showManageCustLkdPrices(){
		$scope.manageCustLkdPrices = [];
		
		CustLkdItemPrice.find({
			filter: { 
			include: [{item:'itemCategory'},'uom'] ,
			where:{customerId: $scope.lkdPCustId}  
			}
		}).$promise
			.then(function(response) { 
			  $scope.dmpsCollection = [].concat(response);
			  angular.forEach($scope.dmpsCollection, function(cp){
				var t = {
					id: cp.id,
					price: cp.price,
					hubId: $scope.lkdPHubId,
					customerId: $scope.lkdPCustId,
					custLkdPeriodId: $scope.lktPId,
					uomQty: cp.uomQty,
					uomId : cp.uomId,
					itemId : cp.itemId,
					itemName : cp.item.name,
					itemCat : cp.item.itemCategory.name,
					uom : cp.uom
				};
				$scope.manageCustLkdPrices.push(t);
			  });
			  Item.find({
					filter: { 
					include: ['itemCategory','uom'] ,
					where:{hubId: $scope.lkdPHubId} 
					}
				}).$promise
					.then(function(response) { 
						var items = [].concat(response);
						var remainingItems = [];
						 angular.forEach(items, function(it){
							var flag = true;
							angular.forEach($scope.manageCustLkdPrices,function(ex){
								if(it.id==ex.itemId){
									flag = false;
									return;
								}
							});
							if(flag){
								var t = {
										id: "",
										price: "",
										hubId: $scope.lkdPHubId,
										customerId: $scope.lkdPCustId,
										custLkdPeriodId: $scope.lktPId,
										itemId : it.id,
										itemName : it.name,
										uomQty : it.uom.quantity,
										uomId : it.uomId,
										itemCat : it.itemCategory.name,
										uom : it.uom
									};
									remainingItems.push(t);
							}
						  });
						  angular.forEach(remainingItems,function(rm){
							$scope.manageCustLkdPrices.push(rm);
						  }); 
						  $scope.showPricesMenu = false;
					});
				
				 
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading customer locked prices!";
			  $scope.isLoading = false;
	   });
	 };
	 $scope.backToMainMenu = function backToMainMenu(){
		$scope.showPricesMenu = true;
	 };
	 $scope.saveMangeCustPrices = function saveMangeCustPrices(isClose){
		var addCustomerPrices = [];
		var updateCustomerPrices = [];
		angular.forEach($scope.manageCustLkdPrices,function(entered){
			if(entered.price!=null && entered.price!=""){
				if(entered.id == null || entered.id == ""){
					var act = {
						price: entered.price,
						hubId: $scope.lkdPHubId,
						customerId: $scope.lkdPCustId,
						uomQty : entered.uomQty,
						custLkdPeriodId: $scope.lktPId,
						itemId : entered.itemId,
						uomId : entered.uom.id
					};
					addCustomerPrices.push(act);
				}else{
					var samePrice = false;
					angular.forEach($scope.dmpsCollection,function(dmp){
						if(dmp.price == entered.price){
							samePrice = true;
							return;
						}
					});
					if(!samePrice){
						var act = {
						id: entered.id,
						price: entered.price,
						hubId: $scope.lkdPHubId,
						customerId: $scope.lkdPCustId,
						custLkdPeriodId: $scope.lktPId,
						itemId : entered.itemId,
						uomQty : entered.uomQty,
						uomId : entered.uom.id
					};
					updateCustomerPrices.push(act);
					}
				}
			}
		});
		if(addCustomerPrices.length>0){
			angular.forEach(addCustomerPrices,function(add){
				CustLkdItemPrice.create(add).$promise.then(function(response){
				});
			});
		}
		if(updateCustomerPrices.length>0){
			angular.forEach(updateCustomerPrices,function(up){
				CustLkdItemPrice.upsert(up).$promise.then(function(response){
				});
			});
		}
		if(isClose == true){
			$scope.showPricesMenu = true;
		}
	 };
});
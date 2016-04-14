app.controller('PriceController', function($scope,commonService, DailyMktPrice, DailyMktPriceHistory, CustLkdItemPrice, CustLkdPeriod, Hub, Market, Item, $filter){
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
  
  function fillDMPTab(){
	$scope.dmpsCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.groupProperty = 'item.itemCategory.name';
	DailyMktPrice.find({
		filter: { include: [{item:'itemCategory'},{market:'hub'}] }
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
		filter: { include: [{item:'itemCategory'},{market:'hub'}] }
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
			filter: { include: ['customer','item','custLkdPeriod','hub'] }
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
			filter: { include: ['customer'] }
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
		if(updatedPrice!=row.minPrice){
			DailyMktPrice.prototype$updateAttributes(
			   { id: row.id }, 
			   { minPrice: updatedPrice }
			 );
		}
   };
    $scope.updateMaxPrice = function updateMaxPrice(updatedPrice, row){
		if(updatedPrice!=row.maxPrice){
			DailyMktPrice.prototype$updateAttributes(
			   { id: row.id }, 
			   { maxPrice: updatedPrice }
			 );
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
   $scope.showDMP = function(){
		if(commonService.hasPermission('pricing')){
			$scope.isDmpLoading = true;
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
		/*else if(commonService.hasPermission('hubadmin')){
			$scope.showForm = 1;
			$scope.hubs = [commonService.getCurrentUser().hub];
		}*/
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
   $scope.addNewItemPrice = function addNewItemPrice(){
		var insertDMP = {
		itemId : $scope.selectedItem.id,
		minPrice : $scope.minPrice,
		maxPrice : $scope.maxPrice,
		dmpDate : new Date(),
		updatedTimestamp : new Date().getTime(),
		marketId : $scope.selectedMarket.id
	};
		
		DailyMktPrice.create(insertDMP).$promise.then(function(response){
			$scope.showForm = 0;
			$scope.setActiveTab(1);
		},function( errorMessage ) {
				  $scope.subError = "Error has occurred while adding dmp!";
		});
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
		CustLkdPeriod.update(insertLkdPeriod).$promise.then(function(response){
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
});
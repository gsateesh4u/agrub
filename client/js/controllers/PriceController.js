app.controller('PriceController', function($scope,commonService, DailyMktPrice, CustLkdItemPrice, CustLkdPeriod, Hub, Market, Item, $filter){
	var tabClasses;
  $scope.selectedTab = 1;
  $scope.tempDMP = {
		itemId : "",
		price : "",
		dmpDate : "",
		updatedTimestamp : "",
		marketId : ""
	};
  function initTabs() {
    tabClasses = ["","",""];
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
	}
  };
 
  //Initialize 
  initTabs();
  $scope.setActiveTab(1);
  
  function fillDMPTab(){
	$scope.dmpsCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	DailyMktPrice.find({
		filter: { include: ['item',{market:'hub'}] }
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
	$scope.fillCustLkdPrices = function(){
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
  $scope.fillCustLkdPeriods = function(){
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
   $scope.updatePrice = function updatePrice(updatedPrice, row){
		if(updatedPrice!=row.price){
			DailyMktPrice.prototype$updateAttributes(
			   { id: row.id }, 
			   { price: updatedPrice }
			 );
		}
   }
   $scope.showDMP = function(){
		if(commonService.hasPermission('admin')){
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
		price : $scope.price,
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
});
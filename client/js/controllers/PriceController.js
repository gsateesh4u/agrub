app.controller('PriceController', function($scope,DailyMktPrice, CustLkdItemPrice, CustLkdPeriod){
	var tabClasses;
  
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
		filter: { include: ['market','item'] }
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
});
app.controller('PriceController', function($scope,DailyMktPrice){
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
  };
 
  //Initialize 
  initTabs();
  $scope.setActiveTab(1);
  
  
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	DailyMktPrice.find({
		filter: { include: ['hub','item','currency'] }
	}).$promise
		.then(function(response) { 
		  $scope.rowCollection = [].concat(response);
		   $scope.displayedCollection = [].concat($scope.rowCollection);
		  if($scope.rowCollection.length==0){
				 $scope.error = "No data found!!!";
			 }
			 $scope.isLoading = false;
	  },function( errorMessage ) {
		  $scope.error = "Error has occurred while loading prices!";
		  $scope.isLoading = false;
   });
   
   $scope.updatePrice = function updatePrice(updatedPrice, row){
		if(updatedPrice!=row.price){
			DailyMktPrice.prototype$updateAttributes(
			   { id: row.id }, 
			   { price: updatedPrice }
			 );
		}
   }
});
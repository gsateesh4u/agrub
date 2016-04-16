app.controller('ItemController',function($scope,Item, Hub, ItemCategory, commonService){
	var tabClasses;
	$scope.selectedTab = 1;
	function initTabs() {
		tabClasses = ["",""];
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
			showItemsTab();
		}else if(tabNum == 2){
			showItemCategoriesTab();
		}
		$scope.showForm = 0;
	};
	//Initialize 
	  initTabs();
	  $scope.setActiveTab(1);
	  
	$scope.tempItem = {
		name : "",
		description: "",
		qualityParam: "",
		qualityVariance: "",
		unit: "",
		available:"true",
		itemCategoryId:"",
		hubId: ""
	};
	$scope.tempItemCategory = {
		name : "",
		hubId: ""
	};
	$scope.addUpdateItem = {
		name : "",
		description: "",
		qualityParam: "",
		qualityVariance: "",
		unit: "",
		available:"",
		itemCategoryId:"",
		hubId: ""
	};
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.showAddUpdateItem = false;
	$scope.isLoading = true;
	function showItemsTab(){
		Item.find({
			filter: { include: ['itemCategory','hub']}
		}).$promise
			.then(function(response) { $scope.rowCollection = [].concat(response);
			  $scope.displayedCollection = [].concat($scope.rowCollection);
			  if($scope.rowCollection.length==0){
					 $scope.error = "No data found!!!";
				 }
				 $scope.isLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading items!";
			  $scope.isLoading = false;
	   });
	};
	function showItemCategoriesTab(){
		ItemCategory.find({
			filter: { include: 'hub' }
		}).$promise
			.then(function(response) { 
				$scope.itemsCatCollection = [].concat(response);
			  if($scope.itemsCatCollection.length==0){
					 $scope.error = "No data found!!!";
				 }
				 $scope.isLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading items categories!";
			  $scope.isLoading = false;
	   });
	};
	
	$scope.showItem = function(item,operation){
	   $scope.isSubLoading = true;
	   $scope.header = operation;
	   $scope.showForm = 1;
		   Hub.find().$promise
			.then(function(response) { 
				$scope.hubs = [].concat(response);
				if($scope.hubs ==null || $scope.hubs.length==0){
					 $scope.errorMessage = "No hubs found!!!";
					 $scope.showAddUpdateItem = false;
					  $scope.isSubLoading = false;
				}else {
					ItemCategory.find().$promise.then(function(res){
						 $scope.isSubLoading = false;
						$scope.itemCategories = [].concat(res);
						$scope.isSubLoading = false;
						if($scope.itemCategories ==null || $scope.itemCategories.length==0){
							 $scope.errorMessage = "No item categories found!!!";
							 $scope.showAddUpdateItem = false;
						}else {
						if(operation == 'Update'){
							   angular.forEach($scope.hubs, function (tempHub) {
								 if(tempHub.id == item.hubId){
									$scope.selectedHub = tempHub;
								 }
							  });
							   angular.forEach($scope.itemCategories, function (tempCat) {
								 if(tempCat.id == item.itemCategoryId){
									$scope.selectedItemCategory = tempCat;
								 }
							  });
						   }
							$scope.showAddUpdateItem = true;
							$scope.item = item;						
						}
					},function( errorMessage ) {
					  $scope.errorMessage = "Error has occurred while loading item categories!";
					  $scope.isSubLoading = false;
					  $scope.showAddUpdateItem = false;
					});
				}
			},function( errorMessage ) {
			  $scope.errorMessage = "Error has occurred while loading hubs!";
			  $scope.isSubLoading = false;
			  $scope.showAddUpdateItem = false;
			});
   };
   $scope.showItemCategory = function showItemCategory(itemCategory,operation){
	   $scope.isSubLoading = true;
	   $scope.header = operation;
	   $scope.showForm = 2;
		   Hub.find().$promise
			.then(function(response) { 
				$scope.hubs = [].concat(response);
				if($scope.hubs ==null || $scope.hubs.length==0){
					 $scope.errorMessage = "No hubs found!!!";
				}else {
					if(operation == 'Update'){
					   angular.forEach($scope.hubs, function (tempHub) {
						 if(tempHub.id == itemCategory.hubId){
							$scope.selectedHub = tempHub;
						 }
					  });
				   }
					$scope.itemCategory = itemCategory;	
					 $scope.isSubLoading = false;
				}
			},function( errorMessage ) {
			  $scope.errorMessage = "Error has occurred while loading hubs!";
			  $scope.isSubLoading = false;
			});
   };
   $scope.cancel = function(){
	   angular.copy($scope.tempItem,$scope.item);
	   $scope.showForm = 0;
   };
   $scope.deleteItem = function deleteItem(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   Item.delete({id:row.id}).$promise
				.then(function(response) { 
				 $scope.showForm = 0;
				$scope.setActiveTab(1);
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting items!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.deleteItemCategory = function deleteItemCategory(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   ItemCategory.delete({id:row.id}).$promise
				.then(function(response) { 
				 $scope.showForm = 0;
				$scope.setActiveTab(2);
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting items Category!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.addOrUpdate = function addOrUpdate(item,operation){
    item.hubId = $scope.selectedHub.id;
		  //item.hub.id = $scope.selectedHub.id;
		  item.itemCategoryId = $scope.selectedItemCategory.id;
		  //item.itemCategory.id = $scope.selectedItemCategory.id;
	   if(operation == 'Add'){
		  Item.create(item).$promise
				.then(function(res) {
				$scope.showForm = 0;
				$scope.setActiveTab(1);
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating item!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   Item.upsert(item).$promise
				.then(function(res) { 
				 $scope.showForm = 0;
				$scope.setActiveTab(1);
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating item!";
				  $scope.isLoading = false;
		   });
	   }
   };
    $scope.addOrUpdateItemCategory = function addOrUpdateItemCategory(itemCategory,operation){
		itemCategory.hubId = $scope.selectedHub.id;
	   if(operation == 'Add'){
		  ItemCategory.create(itemCategory).$promise
				.then(function(res) {
				$scope.showForm = 0;
				$scope.setActiveTab(2);
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating item category!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   ItemCategory.upsert(itemCategory).$promise
				.then(function(res) { 
				 $scope.showForm = 0;
				$scope.setActiveTab(2);
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating item category!";
				  $scope.isLoading = false;
		   });
	   }
   };
});
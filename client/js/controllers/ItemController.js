app.controller('ItemController',function($scope,Item, Hub, ItemCategory){
	$scope.tempItem = {
		name : "",
		description: "",
		qualityParam: "",
		qualityVariance: "",
		unit: "",
		available:"true",
		itemCategoryId:"",
		hubId: "",
		hub:{
			id:"",
			name:""
		},
		itemCategory:{
			id:"",
			name:""
		}
	};
	$scope.addUpdateItem = {
		name : "",
		description: "",
		qualityParam: "",
		qualityVariance: "",
		unit: "",
		available:"",
		itemCategoryId:"",
		hubId: "",
		hub:{
			id:"",
			name:""
		},
		itemCategory:{
			id:"",
			name:""
		}
	};
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.showAddUpdateItem = false;
	$scope.isLoading = true;
	Item.find({
		filter: { include: 'itemCategory' }
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
	$scope.showItem = function(item,operation){
	   $scope.isSubLoading = true;
	   $scope.header = operation;
	 /*  if(operation == 'Update'){
		   $scope.hubs = [item.hub];
		   $scope.selectedHub = item.hub;
		   $scope.showAddUpdateItem = true;
		   $scope.isSubLoading = false;
		   angular.copy(item,$scope.addUpdateItem);
		   $scope.item = $scope.addUpdateItem;
	   }
	   if(operation == 'Add'){*/
		   Hub.find().$promise
			.then(function(response) { 
				$scope.hubs = [].concat(response);
				if($scope.hubs ==null || $scope.hubs.length==0){
					 $scope.errorMessage = "No hubs found!!!";
					 $scope.showAddUpdateItem = false;
				}else {
					ItemCategory.find().$promise.then(function(res){
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
							angular.copy(item,$scope.addUpdateItem);
							$scope.item = $scope.addUpdateItem;
							
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
	   //}
   };
   $scope.cancel = function(){
	   angular.copy($scope.tempItem,$scope.addUpdateItem);
	   $scope.showAddUpdateItem = false;
   };
   $scope.deleteItem = function deleteItem(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   Item.delete({id:row.id}).$promise
				.then(function(response) { 
				 Item.find({
						filter: { include: 'itemCategory' }
					}).$promise
						.then(function(response) {
						  $scope.rowCollection = [].concat(response);
						   $scope.displayedCollection = [].concat($scope.rowCollection);
						  if($scope.rowCollection.length==0){
								 $scope.error = "No data found!!!";
							 }
							 $scope.isLoading = false;
					  },function( errorMessage ) {
						  $scope.error = "Error has occurred while loading items!";
						  $scope.isLoading = false;
				   });
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting items!";
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
				.then(function(response) { 
				 Item.find({
						filter: { include: 'itemCategory' }
					}).$promise
						.then(function(response) {
						  $scope.rowCollection = [].concat(response);
						   $scope.displayedCollection = [].concat($scope.rowCollection);
						  if($scope.rowCollection.length==0){
								 $scope.error = "No data found!!!";
							 }
							 $scope.isLoading = false;
							 $scope.showAddUpdateItem = false;
					  },function( errorMessage ) {
						  $scope.error = "Error has occurred while loading items!";
						  $scope.showAddUpdateItem = false;
						  $scope.isLoading = false;
				   });
				   $scope.showAddUpdateItem = false;
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating item!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   Item.upsert(item).$promise
				.then(function(response) { 
				 Item.find({
						filter: { include: 'itemCategory' }
					}).$promise
						.then(function(response) {
						  $scope.rowCollection = [].concat(response);
						   $scope.displayedCollection = [].concat($scope.rowCollection);
						  if($scope.rowCollection.length==0){
								 $scope.error = "No data found!!!";
							 }
							 $scope.isLoading = false;
							 $scope.showAddUpdateItem = false;
					  },function( errorMessage ) {
						  $scope.error = "Error has occurred while loading items!";
						  $scope.showAddUpdateItem = false;
						  $scope.isLoading = false;
				   });
				   $scope.showAddUpdateItem = false;
					 $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating item!";
				  $scope.isLoading = false;
		   });
	   }
   };
});
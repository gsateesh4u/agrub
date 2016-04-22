app.controller('HubController', function($scope,Hub, Item, ItemCategory, commonService){
	$scope.tempHub = {
		name : ""
	};
	$scope.addUpdateHub = {
		name : "",
		id:""
	};
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.loadItemsIntoHub = false;
	loadHubs();
	function loadHubs(){
		Hub.find().$promise
		.then(function(response) { 
			$scope.hubCollection = [].concat(response);
			if($scope.hubCollection.length==0){
				 $scope.error = "No data found!!!";
			}
			$scope.isLoading = false;
		},function( errorMessage ) {
		  $scope.error = "Error has occurred while loading hubs!";
		  $scope.isLoading = false;
		});
	};
	
	$scope.isRoleExists = function isRoleExists(role){
		return commonService.isRoleExists(role);
	};
	$scope.showHub = function(hub,operation){
	   $scope.isSubLoading = true;
	   $scope.header = operation;
	   if(operation == 'Update'){
		   $scope.showAddUpdateHub = true;
		   $scope.isSubLoading = false;
		   angular.copy(hub,$scope.addUpdateHub);
		   $scope.hub = $scope.addUpdateHub;
	   }
	   if(operation == 'Add'){
			$scope.showAddUpdateHub = true;
			angular.copy(hub,$scope.addUpdateHub);
			$scope.hub = $scope.addUpdateHub;
	   }
   };
   $scope.cancel = function(){
	   angular.copy($scope.tempHub,$scope.addUpdateHub);
	   $scope.showAddUpdateHub = false;
   };
   $scope.deleteHub = function deleteHub(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   Hub.delete({id:row.id}).$promise
				.then(function(response) { 
				 loadHubs();
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting hub!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.addOrUpdate = function addOrUpdate(hub,operation){
	   if(operation == 'Add'){
		  Hub.create(hub).$promise
				.then(function(response) { 
				 loadHubs();
				$scope.showAddUpdateHub = false;
				$scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating hub!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   Hub.prototype$updateAttributes(
			   { id: hub.id }, 
			   { name: hub.name }
			 );
	   }
   };
   $scope.loadItems = function loadItems(){
		$scope.loadItemsIntoHub = true;
		$scope.isSubLoading = true;
		Item.getDefaultItems().$promise
			.then(function(response) { 
			$scope.defaultItems = [].concat(response.items);
			$scope.isSubLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading items!";
			  $scope.isSubLoading = false;
	   });
   };
   $scope.submitItems = function submitItems(){
		if($scope.selHubId!=null && $scope.selHubId!=""){
			var categories = [];
			var items = [];
			angular.forEach($scope.defaultItems,function(item){
				if(item.selected == true){
					var flag = false;
					angular.forEach(categories,function(cat){
						if(cat.name == item.itemCategory.name){
							flag = true;
							return;
						}
					});
					if(flag == false){
						var tempCat = {
							name : item.itemCategory.name,
							hubId : $scope.selHubId
						};
						categories.push(tempCat);
					}
					items.push(item);
				}
			});
			angular.forEach(categories,function(category){
				ItemCategory.create(category).$promise.then(function(res){
					angular.forEach(items, function(tempItem){
						if(tempItem.itemCategory.name == res.name){
							var it = {
								name : tempItem.name,
								description : tempItem.description,
								qualityParam : tempItem.qualityParam,
								qualityVariance : tempItem.qualityVariance,
								unit : tempItem.unit,
								available : tempItem.available,
								itemCategoryId : res.id,
								hubId : $scope.selHubId
							};
							Item.create(it).$promise.then(function(newitem){
							});
						}
					});
				},function(err){
					$scope.subError = 'Error occured while processing request';
				});
			});
		}
		$scope.loadItemsIntoHub = false;
   };
   $scope.backToMainMenu = function backToMainMenu(){
		$scope.loadItemsIntoHub = false;
   };
   $scope.selectAllItems = function selectAllItems(){
		angular.forEach($scope.defaultItems,function(item){
			item.selected = $scope.all;
		});
   };
    $scope.$watch('hubsCollection', function(row) {
	   var flag = false;
	   row.filter(function(r) {
		  if (r.isSelected) {
			  flag = true;
			  $scope.selHubId = r.id;
			  $scope.selHubName = r.name;
		  }
	   });
	   if(!flag){
			  $scope.selHubId = null;
			  $scope.selHubName = null;
	   }
	 }, true);
});
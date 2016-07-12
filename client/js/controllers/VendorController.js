app.controller('VendorController', function($scope,Vendor,Hub, User, VendorUserMap, $filter, $modal){
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.showAddUpdateTO = false;
	$scope.tempVendor = {
		    name: "",
		    address1: "",
		    address2: "",
		    address3: "",
		    city: "",
		    state: "",
		    country: "",
		    zip: "",
		    phone: "",
		    email: "",
		    fax: "",
		    hubId: 0
		  };
	$scope.addUpdateVendorObj = {
		    name: "",
		    address1: "",
		    address2: "",
		    address3: "",
		    city: "",
		    state: "",
		    country: "",
		    zip: "",
		    phone: "",
		    email: "",
		    fax: "",
		    hubId: 0
		  };
   $scope.init = function init(){
	   Vendor.find({
			filter: { include: ['hub'] }
		}).$promise
			.then(function(response) { 
			  $scope.vendorCollection = [].concat(response);
			  if($scope.vendorCollection.length===0){
					 $scope.error = "No data found!!!";
				 }
				 $scope.isLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading vendors!";
			  $scope.isLoading = false;
	   });  
   };
   $scope.init();
   $scope.showVendorDetails = function showVendorDetails(vendor, opr){
	   $scope.header = opr;
	   if(opr === 'Add'){
		   $scope.showAddUpdateVendor = true;
		   $scope.isSubLoading = true;
		   Hub.find().$promise.then(function(response){
			   $scope.hubs = [].concat(response);
			   if($scope.hubs && $scope.hubs.length > 0){
				   angular.copy(vendor,$scope.addUpdateVendorObj);
				   $scope.foundVendor = $scope.addUpdateVendorObj;
			   }else{
				   $scope.subError = "No hubs found!";
			   }
			   $scope.isSubLoading = false;
		   },function(error){
			   $scope.subError = "Error has occurred while loading Hubs!";
			   $scope.isSubLoading = false;
		   });
	   }else if(opr === 'Update'){
		   $scope.showAddUpdateVendor = true;
		   $scope.selectedHub = vendor.hub;
		   $scope.hubs = [vendor.hub];
		   angular.copy(vendor,$scope.addUpdateVendorObj);
		   $scope.foundVendor = $scope.addUpdateVendorObj;
	   }
   };
   $scope.deleteVendor = function deleteVendor(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   $scope.isLoading = true;
		   Vendor.delete({id:row.id}).$promise
				.then(function(response) { 
				 $scope.init();
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting vendor!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.addOrUpdateVendor = function addOrUpdateVendor(vendor,operation){
	   if(operation == 'Add'){
		  vendor.hubId = $scope.selectedHub.id;
		  $scope.isLoading = true;
		  Vendor.create(vendor).$promise
				.then(function(response) { 
					$scope.init();
				    $scope.showAddUpdateVendor = false;
					$scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating vendor!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   $scope.isLoading = true;
		   Vendor.upsert(vendor).$promise
				.then(function(response) { 
				   $scope.showAddUpdateVendor = false;
				   $scope.init();
				   $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while updating vendor!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.cancel = function(){
	   $scope.showAddUpdateVendor = false;
   };
   $scope.manageUsers = function manageUsers(){
	   $scope.vendorUsers = [];
	   VendorUserMap.find({
		   filter:{
				  where:{vendorId: $scope.selVendorId}  
			   }
		   }).$promise.then(function(map){
			   $scope.vendorUsersMap = [].concat(map);
			   User.find().$promise.then(function(users){
				   angular.forEach(users,function(user){
					 var tempMap = {};
					 var flag = false;
					 var vUser = {};
					 angular.forEach($scope.vendorUsersMap, function(mapUser){
						if(user.id === mapUser.userId){
							flag = true;
							vUser = mapUser;
						} 
					 });
					 tempMap.user = user;
					 tempMap.vendorUser = vUser;
					 tempMap.selected = flag;
					 $scope.vendorUsers.push(tempMap);
				  });
				  var modalInstance = $modal.open({
						templateUrl : 'manage-vendor-user-map.html',
						controller  : 'ManageVendorUserMapCtrl',
						backdrop: 'static',
				        backdropClick: true,
				        dialogFade: false,
				        keyboard: true,
				        scope : $scope,
				        resolve : {
				        	vendorUsers : function (){
				        		return $scope.vendorUsers;
				        	}
				        }
					 });
			   });
	   });
   };
   $scope.$watch('vendorsCollection', function(row) {
	   var flag = false;
	   row.filter(function(r) {
		  if (r.isSelected) {
			  flag = true;
			  $scope.selVendorId = r.id;
			  $scope.selVendorName = r.name;
			  $scope.selHubId = r.hubId;
		  }
	   });
	   if(!flag){
			  $scope.selVendorId = null;
			  $scope.selVendorName = null;
			  $scope.selHubId = null;
	   }
	 }, true);
});
app.controller('ManageVendorUserMapCtrl',function($scope,vendorUsers,VendorUserMap,$modalInstance){
	$scope.vendorUsers = vendorUsers;
	$scope.updating = false;
	$scope.updateVendorUserMap = function updateVendorUserMap(){
		$scope.successMessage = null;
		var deletedList = [];
		var addedList = [];
		$scope.updating = true;
		angular.forEach($scope.vendorUsers,function(map){
			if(map.selected === true && !map.vendorUser.userId){
				//addedList.push(map);
				var tempMap = {
						userId : map.user.id,
						vendorId : $scope.selVendorId
				};
				VendorUserMap.create(tempMap).$promise.then(function(data){
					map.vendorUser = data;
				});
			}
			if(map.selected === false && map.vendorUser.userId){
				//deletedList.push(map);
				VendorUserMap.delete({id:map.vendorUser.id}).$promise.then(function(){
				});
			}
			$scope.updating = false;
		});
		/*angular.forEach(deletedList, function(del){
			VendorUserMap.delete({id:del.vendorUser.id}).$promise.then(function(){
			});
		});
		angular.forEach(addedList, function(del){
			
		});*/
		$scope.successMessage = 'Updated Successfully';
		//$modalInstance.dismiss('cancel');
		//$scope.manageUsers();
	};
	$scope.cancel = function () {
	    $modalInstance.dismiss('cancel');
	  };
});
app.controller('VendorController', function($scope,Vendor,Hub, $filter){
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
});
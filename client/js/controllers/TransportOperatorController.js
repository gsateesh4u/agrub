app.controller('TransportOperatorController', function($scope,TransportOperator,Hub, $filter){
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.showAddUpdateTO = false;
	$scope.tempTO = {
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
	$scope.addUpdateToObj = {
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
	   TransportOperator.find({
			filter: { include: ['hub'] }
		}).$promise
			.then(function(response) { 
			  $scope.toCollection = [].concat(response);
			  if($scope.toCollection.length===0){
					 $scope.error = "No data found!!!";
				 }
				 $scope.isLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading transport operators!";
			  $scope.isLoading = false;
	   });  
   };
   $scope.init();
   $scope.showTODetails = function showTODetails(to, opr){
	   $scope.header = opr;
	   if(opr === 'Add'){
		   $scope.showAddUpdateTO = true;
		   $scope.isSubLoading = true;
		   Hub.find().$promise.then(function(response){
			   $scope.hubs = [].concat(response);
			   if($scope.hubs && $scope.hubs.length > 0){
				   angular.copy(to,$scope.addUpdateToObj);
				   $scope.foundTo = $scope.addUpdateToObj;
			   }else{
				   $scope.subError = "No hubs found!";
			   }
			   $scope.isSubLoading = false;
		   },function(error){
			   $scope.subError = "Error has occurred while loading Hubs!";
			   $scope.isSubLoading = false;
		   });
	   }else if(opr === 'Update'){
		   $scope.showAddUpdateTO = true;
		   $scope.selectedHub = to.hub;
		   $scope.hubs = [to.hub];
		   angular.copy(to,$scope.addUpdateToObj);
		   $scope.foundTo = $scope.addUpdateToObj;
	   }
   };
   $scope.deleteTO = function deleteTO(row){
	   var flag = confirm("Do you really want to delete "+row.name+" ?");
	   if(flag){
		   $scope.isLoading = true;
		   TransportOperator.delete({id:row.id}).$promise
				.then(function(response) { 
				 $scope.init();
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while deleting transport operator!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.addOrUpdateTO = function addOrUpdateTO(to,operation){
	   if(operation == 'Add'){
		  to.hubId = $scope.selectedHub.id;
		  $scope.isLoading = true;
		  TransportOperator.create(to).$promise
				.then(function(response) { 
					$scope.init();
				    $scope.showAddUpdateTO = false;
					$scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while creating transport operator!";
				  $scope.isLoading = false;
		   });
	   } 
	   if(operation == 'Update'){
		   $scope.isLoading = true;
		   TransportOperator.upsert(to).$promise
				.then(function(response) { 
				   $scope.showAddUpdateTO = false;
				   $scope.init();
				   $scope.isLoading = false;
			  },function( errorMessage ) {
				  $scope.subError = "Error has occurred while updating transport operator!";
				  $scope.isLoading = false;
		   });
	   }
   };
   $scope.cancel = function(){
	   $scope.showAddUpdateTO = false;
   };
});
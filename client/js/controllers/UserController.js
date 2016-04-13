app.controller('UserController',['$scope','User','Role','RoleMapping','Hub','Customer','CustomerUserMap','HubUserMap', function($scope,User,Role,RoleMapping,Hub,Customer,CustomerUserMap,HubUserMap){
	$scope.tempUser = {
		firstname : "",
		lastname : "",
		middlename : "",
		username : "",
		email : "",
		password : ""
	};
	$scope.showAddUpdateUser = false;
	$scope.rowCollection = [];
	$scope.itemsByPage = 10;
	$scope.isLoading = true;
	$scope.showAddUpdateUser = false;	
	loadUsers();
   function loadUsers(){
		$scope.showAddUpdateUser = false;	
	   User.find({
			filter: { include: ['customers','roles','hubs','hubMappings','customerMappings','roleMappings'] }
		}).$promise
			.then(function(response) { 
			  $scope.rowCollection = [].concat(response);
			   $scope.displayedCollection = [].concat($scope.rowCollection);
			  if($scope.rowCollection.length==0){
					 $scope.error = "No data found!!!";
				 }
				 $scope.isLoading = false;
		  },function( errorMessage ) {
			  $scope.error = "Error has occurred while loading users!";
			  $scope.isLoading = false;
	   });
   };
   $scope.deleteUser = function deleteUser(user){
		if(user.roles.length>0){
			if(user.roles[0].name == 'SYSADMIN'){
				deleteExUser(user);
			} else if(user.roles[0].name == 'HUBADMIN' || user.roles[0].name == 'HUBOWNER'){
				if(user.hubMappings.length>0){
					HubUserMap.deleteById({id:user.hubMappings[0].id}).$promise.then(function(res){
						deleteExUser(user);
					});
				}else{
					deleteExUser(user);
				}
			} else if(user.roles[0].name == 'CUSTADMIN' || user.roles[0].name == 'CUSTOWNER' || user.roles[0].name == 'CUSTREP'){
				if(user.customerMappings.length>0){
					CustomerUserMap.deleteById({id:user.customerMappings[0].id}).$promise.then(function(res){
						deleteExUser(user);
					});
				}else {
					deleteExUser(user);
				}
			}
		}else{
			deleteExUser(user);
		}
   };
   function deleteExUser(user){
		User.deleteById({id:user.id}).$promise.then(function(res){
			$scope.showAddUpdateUser = false;
			loadUsers();
		},function(err){
			$scope.isSubLoading = false;
			$scope.subError = 'Error Deleting User!!! Please try again';
		});
   };
   $scope.showUser = function showUser(user,operation){
		$scope.showAddUpdateUser = true;
		$scope.isSubLoading = true;
		$scope.header = operation;
		$scope.addUpdateUser = {};
		$scope.selectedHub = null;
		$scope.selectedCustomer = null;
		$scope.selectedRole = null;
		$scope.isHubRole = false;
		$scope.isCustomerRole = false;
		 Role.find().$promise
				.then(function(response) { 
					$scope.roles = [].concat(response);
					if($scope.roles ==null || $scope.roles.length==0){
						 $scope.subError = "No roles found!!!";
					}else {
						if(operation == 'Update'){
						  if(user.roles.length>0){
							$scope.selectedRole = user.roles[0];
							var exRoles = [];
							angular.forEach(user.roles, function(exR){
								exRoles.push(exR.name);
							});
							if(exRoles.indexOf('HUBADMIN')!==-1 || exRoles.indexOf('HUBOWNER')!==-1){
								$scope.isHubRole = true;
								Hub.find().$promise
								.then(function(response) { 
									$scope.isSubLoading = false;
									$scope.hubs = [].concat(response);
									if($scope.hubs ==null || $scope.hubs.length==0){
										 $scope.subError = "No hubs found!!!";
									}else {
										//angular.copy(user,$scope.user);
										//$scope.user = $scope.addUpdateUser;
										$scope.user = user;
										if($scope.user.hubs.length>0)
										$scope.selectedHub = $scope.user.hubs[0];
									}
									$scope.isSubLoading = false;
								},function( errorMessage ) {
								  $scope.subError = "Error has occurred while loading hubs!";
								  $scope.isSubLoading = false;
								});
							} else if(exRoles.indexOf('CUSTADMIN')!==-1 || exRoles.indexOf('CUSTOWNER')!==-1 || exRoles.indexOf('CUSTREP')!==-1){
								$scope.isCustomerRole = true;
								Customer.find().$promise
								.then(function(response) { 
									$scope.isSubLoading = false;
									$scope.customers = [].concat(response);
									if($scope.customers ==null || $scope.customers.length==0){
										 $scope.subError = "No customers found!!!";
									}else {
										//angular.copy(user,$scope.user);
										//$scope.user = $scope.addUpdateUser;
										$scope.user = user;
										if($scope.user.customers.length>0)
										$scope.selectedCustomer = $scope.user.customers[0];
									}
									$scope.isSubLoading = false;
								},function( errorMessage ) {
								  $scope.subError = "Error has occurred while loading customers!";
								  $scope.isSubLoading = false;
								});
							}
						 } else{
							$scope.isCustomerRole = false;
							$scope.isHubRole = false;
							$scope.user = user;
							//angular.copy(user,$scope.user);
						 }
					   }
					   else if(operation == 'Add'){
						  // angular.copy(user,$scope.user);
						  $scope.user = user;
						   //$scope.user = $scope.addUpdateUser;
					   }
					}
					$scope.isSubLoading = false;
				},function( errorMessage ) {
				  $scope.subError = "Error has occurred while loading roles!";
				  $scope.isSubLoading = false;
				});	
   };
   $scope.populateNextField = function populateNextField(){
		if($scope.selectedRole.name == 'HUBADMIN' || $scope.selectedRole.name == 'HUBOWNER'){
			Hub.find().$promise
			.then(function(response) { 
				$scope.isHubRole = true;
				$scope.selectedHub = null;
				$scope.selectedCustomer = null;
				$scope.isCustomerRole = false;
				$scope.isSubLoading = false;
				$scope.hubs = [].concat(response);
				if($scope.hubs ==null || $scope.hubs.length==0){
					 $scope.subError = "No hubs found!!!";
				}
			},function( errorMessage ) {
			  $scope.subError = "Error has occurred while loading hubs!";
			  $scope.isSubLoading = false;
			});
		} else if($scope.selectedRole.name == 'CUSTADMIN' || $scope.selectedRole.name == 'CUSTOWNER' || $scope.selectedRole.name == 'CUSTREP'){
			Customer.find().$promise
			.then(function(response) { 
				$scope.isCustomerRole = true;
				$scope.selectedCustomer = null;
				$scope.selectedHub = null;
				$scope.isHubRole = false;
				$scope.isSubLoading = false;
				$scope.customers = [].concat(response);
				if($scope.customers ==null || $scope.customers.length==0){
					 $scope.subError = "No customers found!!!";
				}
			},function( errorMessage ) {
			  $scope.subError = "Error has occurred while loading customers!";
			  $scope.isSubLoading = false;
			});
		} else {
			$scope.isCustomerRole = false;
			$scope.isHubRole = false;
			$scope.selectedHub = null;
			$scope.selectedCustomer = null;
		}
   };
   $scope.addOrUpdateUser = function addOrUpdateUser(user,operation){
		if($scope.selectedRole){
			if(operation == 'Update'){
				var tUser = {
					id : user.id,
					firstname : user.firstname,
					email : user.email,
					middlename : user.middlename,
					lastname : user.lastname,
					username : user.username
				};
				User.update({id:tUser.id},{data:tUser}).$promise.then(function(updatedUser){
					if(user.roles[0].name !== $scope.selctedRole.name){
						user.roleMappings[0].roleId = $scope.selectedRole.id;
						RoleMapping.update({id:user.roleMappings[0].id},{data:user.roleMappings[0]}).$promise.then(function(updatedRM){
							if($scope.selectedRole.name == 'HUBADMIN' || $scope.selectedRole.name == 'HUBOWNER'){
								if(user.hubMappings.length>0){
									if(user.hubs[0].name!==$scope.selectedHub.name){
										user.hubMappings[0].hubId = $scope.selectedHub.id;
										HubUserMap.update({id:user.hubMappings[0].id},{data:user.hubMappings[0]}).$promise.then(function(updatedUserHub){
											if(user.customerMappings.length>0){
												CustomerUserMap.delete({id:user.customerMappings[0].id}).$promise.then(function(dcum){
													loadUsers();
												});
											} else {
												loadUsers();
											}
										});
									}
								}else {
									var hubMap = {
										hubId : $scope.selectedHub.id,
										userId : user.id
									};
									HubUserMap.create(user.hubMappings[0]).$promise.then(function(updatedUserHub){
											if(user.customerMappings.length>0){
												CustomerUserMap.delete({id:user.customerMappings[0].id}).$promise.then(function(dcum){
													loadUsers();
												});
											} else {
												loadUsers();
											}
										});
								}
							}else if($scope.selectedRole.name == 'CUSTADMIN' || $scope.selectedRole.name == 'CUSTOWNER' || $scope.selectedRole.name == 'CUSTREP'){
								if(user.customerMappings.length>0){
									if(user.customers[0].name!==$scope.selectedCustomer.name){
										user.customerMappings[0].hubId = $scope.selectedCustomer.id;
										CustomerUserMap.update({id:user.customerMappings[0].id},{data:user.customerMappings[0]}).$promise.then(function(updatedUserCustomer){
											if(user.hubMappings.length>0){
												HubUserMap.delete({id:user.hubMappings[0].id}).$promise.then(function(dcum){
													loadUsers();
												});
											} else {
												loadUsers();
											}
										});
									}
								}else {
									var cusotmerMap = {
										customerId : $scope.selectedCustomer.id,
										userId : user.id
									};
									CustomerUserMap.create(user.customerMappings[0]).$promise.then(function(updatedUserCustomer){
											if(user.hubMappings.length>0){
												HubUserMap.delete({id:user.hubMappings[0].id}).$promise.then(function(dcum){
													loadUsers();
												});
											} else {
												loadUsers();
											}
										});
								}
							}else if($scope.selectedRole.name == 'SYSADMIN'){
								if(user.hubMappings.length>0){
									HubUserMap.delete({id:user.hubMappings[0].id}).$promise.then(function(dcum){
										loadUsers();
									});
								} else if(user.customerMappings.length>0){
									CustomerUserMap.delete({id:user.customerMappings[0].id}).$promise.then(function(dcum){
										loadUsers();
									});
								} else {
									loadusers();
								}
							} else {
								loadUsers();
							}
						});
					} else {
						loadUsers();
					}					
				},function(err){
					$scope.isSubLoading = false;
					$scope.subError = 'Error Updating User!!! Please try again';
				});
			} else if(operation == 'Add'){
				User.create(user).$promise.then(function(cUser){
					var tRM = {
						principalType : 'USER',
						principalId : cUser.id,
						roleId : $scope.selectedRole.id
					};
					RoleMapping.create(tRM).$promise.then(function(nRM){
						if($scope.selectedRole.name == 'CUSTADMIN' || $scope.selectedRole.name == 'CUSTOWNER' || $scope.selectedRole.name == 'CUSTREP'){
							var tcum = {
								userId : cUser.id,
								customerId : $scope.selectedCustomer.id
							};
							CustomerUserMap.create(tcm).$promise.then(function(ncum){
								loadUsers();
							});
						} else if($scope.selectedRole.name == 'HUBADMIN' || $scope.selectedRole.name == 'HUBOWNER'){
							var thum = {
								userId : cUser.id,
								hubId : $scope.selectedHub.id
							};
							HubUserMap.create(thum).$promise.then(function(ntum){
								loadUsers();
							});
						} else {
							loadUsers();
						}
					});
				},function(err){
					$scope.isLoading = false;
					$scope.subError = 'Error Creating User!!! Please try again';
				});
			}
		}
   };
}]);
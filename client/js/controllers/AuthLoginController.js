app.controller('AuthLoginController',['$scope', '$rootScope', '$state', 'User','$cookieStore',  function($scope, $rootScope, $state, User, $cookieStore){
	$scope.loginError = "";
	$scope.signIn = function signIn() {
	$scope.loginError = "";
	User
        .login({email: $scope.email, password: $scope.password})
        .$promise
        .then(function(response) {
			if(response.error){
				if(response.error.statusCode == 400){
					$scope.loginError = "Bad request";
				} else if(response.error.statusCode== 401){
					$scope.loginError = "Invalid credentials. Please try again";
				} else { 
					$scope.loginError = "Unable to process your request";
				}
			}else{
				var tokenId = response.id;
				User.findById({id:response.user.id,
					filter: {include:['roles','customers','hubs']}
					}).$promise
						.then(function(curUser) { 
						  if(!curUser){
								 $scope.loginError = "Unable to find you!!!1";
							 }
							 else{
								$rootScope.currentUser = curUser;
								$rootScope.currentUser.tokenId = tokenId;
								var currentUser = {};
								angular.copy($rootScope.currentUser, currentUser);
								$cookieStore.put("currentUser",currentUser);
							 }
					  },function( errorMessage ) {
						  $scope.loginError = "Unable to process your request";
				   });					
				//$state.go('/');
			}          
        },function( errorMessage ) {
				  $scope.loginError = "Error has occurred while loading order details!"+errorMessage;
		   });
    };
	$scope.logout =  function logout() {
       User
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
		 $cookieStore.remove('currentUser');
		 $state.go('login');
       });
    }
   $scope.register = function signup() {
       User
        .create({
         email: $scope.email,
         password: $scope.password
       })
       .$promise;
    }
}]);
app.controller('AuthLoginController',['$scope', '$rootScope', '$state', 'User','$cookieStore',  function($scope, $rootScope, $state, User, $cookieStore){
	$scope.loginError = "";
	$scope.login = function() {
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
				$rootScope.currentUser = {
					id: response.user.id,
					username:response.user.username,
					tokenId: response.id,
					email: $scope.email
				};
				var currentUser = {};
				angular.copy($rootScope.currentUser, currentUser);
				$cookieStore.put("currentUser",currentUser);				
				$state.go('customers');
			}          
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
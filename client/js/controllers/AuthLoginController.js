app.controller('AuthLoginController',['$scope', '$rootScope', '$state', 'User',  function($scope, $rootScope, $state, User){
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
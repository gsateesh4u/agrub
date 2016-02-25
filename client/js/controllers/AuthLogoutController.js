app.controller('AuthLogoutController',['$scope', '$rootScope', '$state', 'User', '$cookieStore',  function($scope, $rootScope, $state, User, $cookieStore){
	 User
       .logout()
       .$promise
       .then(function(response) {
         $rootScope.currentUser = null;
		 $cookieStore.remove('currentUser');
		 $state.go('login');
       },function(error){
		$rootScope.currentUser = null;
			$state.go('login');
	   });
}]);
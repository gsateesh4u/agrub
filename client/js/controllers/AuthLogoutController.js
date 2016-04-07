app.controller('AuthLogoutController',['$scope', '$rootScope', '$state', 'User', '$cookieStore','LoopBackAuth',  function($scope, $rootScope, $state, User, $cookieStore,LoopBackAuth){
	User
       .logout()
       .$promise
       .then(function(response) {
		LoopBackAuth.clearUser();
		LoopBackAuth.clearStorage();
         $rootScope.currentUser = null;
		 $cookieStore.remove('currentUser');
		 $state.go('login');
       },function(error){
		LoopBackAuth.clearUser();
		LoopBackAuth.clearStorage();
		$rootScope.currentUser = null;
		$cookieStore.remove('currentUser');
			$state.go('login');
	   });
}]);
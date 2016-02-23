app.controller('AuthLogoutController',['$scope', '$rootScope', '$state', 'User',  function($scope, $rootScope, $state, User){
	 User
       .logout()
       .$promise
       .then(function(response) {
         $rootScope.currentUser = null;
		 $state.go('login');
       },function(error){
		$rootScope.currentUser = null;
			$state.go('login');
	   });
}]);
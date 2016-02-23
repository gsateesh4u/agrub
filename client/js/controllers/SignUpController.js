app.controller('SignUpController', ['$scope', 'AuthService', '$state',
      function($scope, AuthService, $state) {
    $scope.register = function() {
      AuthService.register($scope.user.email, $scope.user.password)
        .then(function() {
          $state.transitionTo('/');
        });
    };
  }]);
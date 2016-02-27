var app = angular
  .module('app', [
    'ui.router','lbServices','ngCookies',
    'ui.bootstrap','smart-table','xlat','blockUI','angularFileUpload'
  ])
  //configure pagination template for smart-table
	.config(function(stConfig) {
      stConfig.pagination.template = './views/templates/smart-table/pagination.html';
    })
    //configure routes
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider,
      $urlRouterProvider) {
    $stateProvider
      .state('customers', {
        url: '/customers',
        templateUrl: 'views/customers.html',
        controller: 'CustomerController',
        authenticate: true
      })
	  .state('orders', {
        url: '/orders',
        templateUrl: 'views/orders.html',
        controller: 'OrderController',
        authenticate: true
      })
	  .state('deliveryChalans', {
        url: '/deliveryChalans',
        templateUrl: 'views/deliveryChalans.html',
        controller: 'DeliveryChalanController',
        authenticate: true
      })
      .state('users', {
        url: '/users',
        templateUrl: 'views/users.html',
        controller: 'UserController'
      })
      .state('hubs', {
        url: '/hubs',
        templateUrl: 'views/hubs.html',
        controller: 'HubController',
        authenticate: true
      })
      .state('items', {
        url: '/items',
		templateUrl: 'views/items.html',
        controller: 'ItemController',
        authenticate: true
      })
	  .state('uploadOrder', {
        url: '/uploadOrder',
		templateUrl: 'views/uploadOrders.html',
        controller: 'UploadOrderController',
        authenticate: true
      })
	   .state('prices', {
        url: '/prices',
		templateUrl: 'views/prices.html',
        controller: 'PriceController',
        authenticate: true
      })
      .state('forbidden', {
        url: '/forbidden',
        templateUrl: 'views/forbidden.html',
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController'
      })
      .state('reports', {
        url: '/reports',
        templateUrl: 'views/reports.html',
        controller: 'ReportsController',
        authenticate: true
      });
    $urlRouterProvider.otherwise('login');
  }])
  //http interceptor
  .factory('httpRInterceptor', ['$rootScope', '$q', '$window', 'blockUI',
	                                     function($rootScope, $q, $window,blockUI) {
	                                       return {
	                                         request: function (req) {
	                            			  blockUI.start();
	                                           return req;
	                                         },
	                            			 // response method
	                            				response: function(response) {
	                            				  // do something on success
	                            				  blockUI.stop();
	                            				  return response;
	                            				},
	                                         responseError: function (rejection) {
	                            			  blockUI.stop();
	                                           if (rejection.status == 401) {
	                                             return rejection;
	                                           }

	                                           return $q.reject(rejection);
	                                         }
	                                       };
	                                   }]) 
       .config(['$urlRouterProvider', '$httpProvider', function($urlRouterProvider,$httpProvider) {
         $httpProvider.interceptors.push('httpRInterceptor');  
         }
       ])
  .run(['$rootScope', '$state', '$cookieStore', function($rootScope, $state, $cookieStore) {
    $rootScope.$on('$stateChangeStart', function(event, next) {
    	if($state.current.name!=null && $state.current.name!=""){
    		angular.element(document.getElementById($state.current.name)).removeClass("active");
    	}
    	if(next.name!=null && next.name!=""){
    		angular.element(document.getElementById(next.name)).addClass("active");
    	}
    	if($cookieStore.get('currentUser')!=null){
			//angular.copy($cookieStore.get('currentUser'), $rootScope.currentUser);
			$rootScope.currentUser = $cookieStore.get('currentUser');
		}
    	//alert(angular.toJson(next));
    	//$rootScope.isActive = (angular.toJson(next.url));
      // redirect to login page if not logged in
      if (next.authenticate && !$cookieStore.get('currentUser')) {
        event.preventDefault(); //prevent current page from loading
        $state.go('login');
      }
    });
  }]).controller('MainController',function($scope,$window){
	 
	  $scope.toggleSideBar = function(){
		   if ($window.width <= 992) {
			   angular.element(document.getElementsByClassName("row-offcanvas")[0]).toggleClass("active");
			   angular.element(document.getElementsByClassName("left-side")[0]).removeClass("collapse-left");
			   angular.element(document.getElementsByClassName("right-side")[0]).removeClass("strech");
			angular.element(document.getElementsByClassName("row-offcanvas")[0]).toggleClass("relative");
		   } else {
			angular.element(document.getElementsByClassName("left-side")[0]).toggleClass("collapse-left");
			angular.element(document.getElementsByClassName("right-side")[0]).toggleClass("strech");
			var leftPane = angular.element(document.getElementsByClassName("left-side")[0]);
			var rightPane = angular.element(document.getElementsByClassName("right-side")[0]);
			leftPane.toggleClass("collapse-left");
            rightPane.toggleClass("strech");
		   }
	  };
	  
  });

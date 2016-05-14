var app = angular
  .module('app', [
    'ui.router','lbServices','ngCookies','angular.filter',
    'ui.bootstrap','smart-table','xlat','blockUI','angularFileUpload','ngSanitize','ui.bootstrap.datetimepicker'
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
       .state('purchaseOrders', {
        url: '/purchaseOrders',
        templateUrl: 'views/purchaseOrders.html',
        controller: 'PurchaseOrderController',
        authenticate: true
      })
       .state('salesOrders', {
        url: '/salesOrders',
        templateUrl: 'views/salesOrders.html',
        controller: 'SalesOrderController',
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
        controller: 'UserController',
		authenticate: true
      })
      .state('hubs', {
        url: '/hubs',
        templateUrl: 'views/hubs.html',
        controller: 'HubController',
        authenticate: true
      })
	   .state('markets', {
        url: '/markets',
        templateUrl: 'views/markets.html',
        controller: 'MarketController',
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
        templateUrl: 'views/login.html',
        controller: 'AuthLoginController'
      })
      .state('logout', {
        url: '/logout',
        controller: 'AuthLogoutController',
		authenticate: true
      })
      .state('reports', {
        url: '/reports',
        templateUrl: 'views/reports.html',
        controller: 'ReportsController',
        authenticate: true
      });
    $urlRouterProvider.otherwise('hubs');
  }])
  //http interceptor
  .factory('httpRInterceptor', ['$rootScope', '$q', '$window', 'blockUI','LoopBackAuth','$location','$cookieStore',
	                                     function($rootScope, $q, $window,blockUI,LoopBackAuth,$location,$cookieStore) {
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
	                                              LoopBackAuth.clearUser();
												  LoopBackAuth.clearStorage();
												  $rootScope.currentUser = null;
												  $cookieStore.remove('currentUser');
												  $location.path('/login');
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
  }]).controller('MainController',function($rootScope, $scope,$window,commonService){
	 $rootScope.hasPermission = function hasCreatePermission(role){
			  return commonService.hasPermission(role);
		  };
	
	  $scope.toggleSideBar = function(){
		   if ($window.innerWidth <= 992) {
			   angular.element(document.getElementsByClassName("row-offcanvas")[0]).toggleClass("active");
			   angular.element(document.getElementsByClassName("left-side")[0]).removeClass("collapse-left");
			   angular.element(document.getElementsByClassName("right-side")[0]).removeClass("strech");
			angular.element(document.getElementsByClassName("row-offcanvas")[0]).toggleClass("relative");
		   } else {
			angular.element(document.getElementsByClassName("left-side")[0]).toggleClass("collapse-left");
			angular.element(document.getElementsByClassName("right-side")[0]).toggleClass("strech");
		   }
	  };
	  
  }).service(
	        "commonService",
	        function($cookieStore) {
	            // Return public API.
	            return({
	                hasPermission : hasPermission,
					getCurrentUser : getCurrentUser,
					isRoleExists : isRoleExists,
					getUserHubs : getUserHubs,
					getExistingUoms : getExistingUoms
	            });
	            function getExistingUoms(){
	            	return $cookieStore.get("uoms");
	            };
				function isRoleExists(role){
					var currentUser = $cookieStore.get("currentUser");
					if(currentUser == null || currentUser.roles == null || currentUser.roles.length == 0){
	            		return false;
	            	} else {
						var flag = false;
						angular.forEach(currentUser.roles, function (tempRole) {
							 if(role === tempRole.name){
								flag = true;
							 }
					     });
						 return flag;
					}
				};
				function getUserHubs(){
					var currentUser = $cookieStore.get("currentUser");
					if(currentUser == null){
	            		return null;
	            	} else {
						return currentUser.hubs;
					}
				};
				//check for permission
	            function hasPermission(accessFor){
	            	var currentUser = $cookieStore.get("currentUser");
					//alert(angular.toJson(currentUser));
	            	if(currentUser == null || currentUser.roles == null || currentUser.roles.length == 0){
	            		return false;
	            	} else {
						var flag = false;
						var tempRoles = [];
						 angular.forEach(currentUser.roles, function (tempRole) {
							 /*if(tempRole.name == role){
								flag = true;
							 }*/
							 tempRoles.push(tempRole.name);
					     });
						 if(tempRoles.indexOf('SYSADMIN')!==-1 || tempRoles.indexOf('HUBOWNER')!==-1){
							return true;
						 }else{
							if(tempRoles.indexOf('HUBADMIN')!==-1){
								if(accessFor !== 'reports')
									return true;
							} else if(tempRoles.indexOf('CUSTOWNER')!==-1 || tempRoles.indexOf('CUSTADMIN')!==-1 || tempRoles.indexOf('CUSTREP')!==-1){
								if(accessFor == 'orders' || accessFor == 'uploadOrder'){
									return true;
								}
							}
						 }
	            		 return flag;
	            	}
	            };
				function getCurrentUser(){
					return $cookieStore.get("currentUser");
				};
	}).directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            // view -> model
            elm.bind('blur', function() {
                scope.$apply(function() {
                    //ctrl.$setViewValue(elm.html());
					//scope.$eval(attrs.ngEnter);
                });
            });

            // model -> view
           /* ctrl.render = function(value) {
                elm.html(value);
            };*/

            // load init value from DOM
           // ctrl.$setViewValue(elm.html());
			 elm.bind("keydown keypress", function (event) {
	            if(event.which === 13) {
	            	ctrl.$setViewValue(elm.html());
	                scope.$apply(function (){
	                    scope.$eval(attrs.ngEnter);
	                    elm.blur();
	                });
	 
	                event.preventDefault();
	            }
	        });           
        }
    };
}).filter('dateDiff', function () {
  var magicNumber = (1000 * 60 * 60 * 24);
  return function (toDate) {
    if(toDate){
		 var utc1 = new Date(toDate);
		var utc2 = new Date();
      var dayDiff = Math.floor((utc1 - utc2) / magicNumber);
      if (angular.isNumber(dayDiff)){
        return dayDiff + 1;
      }
    }
  };
});
				

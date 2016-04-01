// We'll create a separate module that we can depend on
// in our main application module.
var xlat = angular.module('xlat', []);

xlat.factory('xlatService', function() {
  // This function will be executed once. We use it as
  // a scope to keep our current language in (thus avoiding
  // the ugly use of root scope).
  var currentLanguage = 'en';
  // We copy the initial translation table that we included
  // in a separate file to our scope. (As may might change
  // this dynamically, it's good practice to make a deep copy
  // rather than just refer to it.)
  var tables = {
		    'en': { 'appLogo':'AGRUB','lbl_toggle_nav':'Toggle Navigation','menu_customers':'Customers','menu_users':'Users','menu_items':'Items','menu_hubs':'Hubs','menu_reports':'Reports','menu_orders':'Orders','menu_prices':'Pricing',
				'menu_upload_order':'Upload Order', 'menu_DC':'Delivery Chalans','menu_DMP':'Daily Market Prices','menu_Cust_Lock_Periods':'Customer Lock Periods','menu_Cust_Prices':'Customer Prices','menu_markets':'Markets',
		    	'copyright':'Copyright \xA9 1010 Labs, 2016','tbl_head_users':'All Users','tbl_head_customers':'All Customers','tbl_head_hubs':'All Hubs','tbl_head_items':'All Items','tbl_head_reports':'Reports','tbl_head_orders':'All Orders',
				'tbl_head_prices':'Pricing','tbl_head_upload_order':'Upload Order','tbl_head_DC':'All Delivery Chalans','tbl_head_Markets':'Markets'}
              };
  // We return the service object that will be injected into
  // both our filter and our application module.
  return {
    setCurrentLanguage: function(newCurrentLanguage) {
      currentLanguage = newCurrentLanguage;
    },    
    getCurrentLanguage: function() {
      return currentLanguage;
    },    
    xlat: function(label, parameters) {
      // This is where we will add more functionality
      // once we start to do something more than
      // simply look up a label.
      return tables[currentLanguage][label];
    }    
  }; 
});

// The filter itself has now a very short definition; it simply
// acts as a proxy to the xlatService's xlat function.
xlat.filter('xlat', ['xlatService', function(xlatService) {
  return function(label) {
    return xlatService.xlat(label);
  };
}]);
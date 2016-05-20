var loopback = require('loopback');
module.exports = function(User) {
User.profile = function(cb) {
	var ctx = loopback.getCurrentContext();
  // Get the current access token
  var accessToken = ctx.get('accessToken');
	User.findById(accessToken.userId,{
	  include:['hubs','roles','customers'],
	}, cb);
};
User.m_profile = function(userId, cb) {
	User.findById(userId,{
	  include:['hubs'
		        ,'roles'
						, {relation:'customers',
              scope:{include: ['shippingAddresses','billingAddresses']}
              }
					],
	}, cb);
};
User.remoteMethod(
        'profile',
        {
          returns: {arg: 'user', type: 'object'},
		  http: {path:'/profile/me', verb: 'get'}
        }
    );
};

module.exports = function(User) {

User.profile = function(userId, cb) {
	User.findById(userId,{
	  include:['hubs','roles','customers'],
	}, cb);
};
User.remoteMethod(
        'profile', 
        {
		  accepts: {arg: 'userId', type: 'string'},
          returns: {arg: 'user', type: 'object'},
		  http: {path:'/:userId/profile', verb: 'get'}
        }
    );
};

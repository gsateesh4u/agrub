module.exports = function(Email) {

	Email.sendCustomEmail = function(options){
		Email.send({
			to : options.to,
			from : 'agrubcare@gmail.com',
			subject : options.subject,
			text : options.text,
			html : options.html
		},function(err,mail){
			console.log('Email sent to '+options.to);
		});
		//return cb(null,'success');
	}
};

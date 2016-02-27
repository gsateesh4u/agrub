module.exports = function(DeliveryChalan) {
DeliveryChalan.afterSave = function(next) {
  
  DeliveryChalan.app.models.Email.send({
					  to: 'agrubcare@gmail.com',
					  from: 'agrubcare@gmail.com',
					  subject: 'DeliveryChallan Created #'+this.id,
					  text: 'New DeliverChallan',
					  html: 'Hi , New Delivery Challan has been generated with id # <b> '+this.id+' </b>. Please process it.'
					});
  
  next();
};
};

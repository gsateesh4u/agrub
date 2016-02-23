module.exports = function(Container) {
Container.beforeRemote('upload', function(ctx,  modelInstance, next) {
    //OUPTUTS: {orderId:1, customerId:1, otherImageInfo:[]}
    console.log(ctx.req.query); 
    next();
});
};
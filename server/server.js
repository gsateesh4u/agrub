var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

// ------------ Protecting mobile backend with Mobile Client Access start -----------------

// Load passport (http://passportjs.org)
var passport = require('passport');

// Get the MCA passport strategy to use
var MCABackendStrategy = require('bms-mca-token-validation-strategy').MCABackendStrategy;

// Tell passport to use the MCA strategy
passport.use(new MCABackendStrategy())

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Tell application to use passport
app.use(passport.initialize());


// Protect Orders endpoint so it can only be accessed by agrub mobile
app.get('/api/TryAgain', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
      console.log("Tried again - passed");
        res.send(200);
    }

);

app.get('/api/m/ItemCategories', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
     var atts = JSON.parse(req.user.attributes);
      app.models.ItemCategory.find(
       { include:{
              relation:'items'
              },where: {hubId:parseInt(atts.hubId)}
            },
      function(err, itemCategories){
           if (err) { res.send(err);
           }
           if ( itemCategories ) {
             res.status(200).send(itemCategories);
           }
         }
    );
  }
);


app.get('/api/m/DeliveryChalans', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
     var atts = JSON.parse(req.user.attributes);
      app.models.DeliveryChalan.find(
       { 
       include:{'salesOrder':{'salesOrderLines':'item'}},
          
              where: {customerId:parseInt(atts.customerId)}
            },
      function(err, deliveryChalans){
           if (err) { res.send(err);
           }
           if ( deliveryChalans ) {
             res.status(200).send(deliveryChalans);
           }
         }
    );
  }
);



app.get('/api/m/Orders', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
     var atts = JSON.parse(req.user.attributes);
      app.models.Order.find(
       { where: {customerId:parseInt(atts.customerId)}
       },
      function(err, orders){
           if (err) { res.send(err);
           }
           if ( orders ) {
             res.status(200).send(orders);
           }
         }
    );
  }
);

app.get('/api/m/Orders/fullOrders', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
     var atts = JSON.parse(req.user.attributes);
      app.models.Order.fullOrders(
      function(err, orders){
           if (err) { res.send(err);
           }
           if ( orders ) {
             res.status(200).send(orders);
           }
         }
    );
  }
);

app.post('/api/m/Orders/placeOrder',passport.authenticate('mca-backend-strategy', {session: false}), function(req, res){
   //  var atts = JSON.parse(req.user.attributes);
      app.models.Order.placeOrder(req.orderObj,
      function(err, order){
           if (err) { res.send(err);
           }
           if ( order ) {
             res.status(200).send(order);
           }
         }
    );
  }
);


app.post('/apps/:tenantID/agrub/startAuthorization', function(req, res) {
         res.json({
             status: "challenge",
             challenge: {question: "userCredentials - email, password"}
         });
     });


app.post('/apps/:tenantID/agrub/handleChallengeAnswer', function(req, res) {
  
    app.models.user.login(
      {  email: req.body.challengeAnswer.email,
         password: req.body.challengeAnswer.password
      },
      'user', 
      function (err, token) {
          // login fails
          if (err) {
            console.log("login fails");
                     res.send({
                     status: "failure",
                     challenge: {
                     message: "unknown credentials"
                     }
                     });
                     return;
          }       
          // login succeeds 
          console.log("login succeeds");       
          app.models.user.findOne(
            { include:{
              relation:'customer',
              scope:{include: {
              relation:'hub'
                 }
                }
              },where: {email:req.body.challengeAnswer.email}
            },
          function(err, userM){      
             if (err) {     
                res.send({
                status: "failure",
                challenge: {
                message: "unknown credentials"
                 }
               });
               return;
             }
              if ( userM ) {             
                 var userO = userM.toJSON();              
                 res.send( {
                    status: "success",
                    userIdentity: {
                    userName: userO.email,
                    displayName: userO.username,
                    attributes: {
                      customerId: new String(userO.customer.id),
                      customerName: userO.customer.name,
                      hubId: new String(userO.customer.hub.id),
                      hubName:userO.customer.hub.name
                    }
                  }
                 });
               return; 
             }   
             res.send( {
               status: "failure",
               challenge: {
               message: "unknown credentials"
              }
              });
             return;
            }
          );
         
      }
    );
     } 
);

// ------------ Protecting backend APIs with Mobile Client Access end -----------------


app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

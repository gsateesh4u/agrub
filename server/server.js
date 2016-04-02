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


app.get('/api/m/DailyMktPrices', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
     var atts = JSON.parse(req.user.attributes);
      app.models.DailyMktPrice.find(
       { where: {hubId:parseInt(atts.hubId)}
       },
      function(err, dailyMktPrices){
           if (err) { res.send(err);
           }
           if ( dailyMktPrices ) {
             res.status(200).send(dailyMktPrices);
           }
         }
    );
  }
);

app.post('/api/m/DailyMktPrices',passport.authenticate('mca-backend-strategy', {session: false}), function(req, res){
  var atts = JSON.parse(req.user.attributes);
  var updatedDMPs = new Array();
  var dailyMktPrices = req.body;
   for (index = 0; index < dailyMktPrices.length; ++index) {
  var currentId;
  app.models.DailyMktPrice.findOne(
     { where: {and: [ {itemId:parseInt(dailyMktPrices[index].itemId)}, {marketId:parseInt(dailyMktPrices[index].marketId)} ] }
  },
  function(er1, dmp){
       if (er1) throw er1;
       if ( dmp == null ) {
         console.log("No existing DMP found for this item " )}
       else {
         currentId = dmp.id;
         dmp.id = null;
         dmp.updatedTimestamp = new Date();
         app.models.DailyMktPriceHistory.create(dmp, function(er2,dmpH){
            if (er2) { throw er2;}
            if (dmpH == null) {
              console.log("Did not create DMP history for this item " )
            }
            else {
              console.log("Created DMP history for this item "  )}
         }
       );
       }
     }
  );
  console.log("currentId " + currentId);
  today = new Date();
  dailyMktPrices[index].updatedTimestamp = today;
  dailyMktPrices[index].dmpDate = today;
  if (currentId){
  dailyMktPrices[index].id = currentId;
  }
  app.models.DailyMktPrice.upsert(dailyMktPrices[index],
  function(err, dmp_updated){
       if (err) {throw err;   }
       if ( dmp_updated == null){
         console.log("Did not create DMP for this item ")
       }
       else {
         console.log("Created DMP history for this item Pushing into return array")
         updatedDMPs.push(dmp_updated);
       }
     }
);
} //end for loop
res.status(200).send(updatedDMPs);
}
);

app.get('/api/m/DeliveryChalans', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
     var atts = JSON.parse(req.user.attributes);
      app.models.DeliveryChalan.find(
       {
       include:[{'salesOrder':{'salesOrderLines':'item'}},'deliveryChalanStatus'],

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
app.put('/api/m/DeliveryChalans/updateSO',passport.authenticate('mca-backend-strategy', {session: false}), function(req, res){
      app.models.DeliveryChalan.updateSO(req.dc,
      function(err, deliveryChalan){
           if (err) { res.send(err);
           }
           if ( deliveryChalan ) {
             res.status(200).send(deliveryChalan);
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
            { include:[{
              relation:'customer',
              scope:{include: {
              relation:'hub'
                 }
                }
              },
              {
              relation:'roles'
            }]
          ,
              where: {email:req.body.challengeAnswer.email}
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
              //   console.log(JSON.stringify(userO));
                  console.log(userO);
                  var _rolesNames = "";
                if ("roles" in userO){
                 for (index = 0; index < userO.roles.length; ++index) {
                   if (index >0) _rolesNames += ",";
                     _rolesNames += userO.roles[index].name;
                 }
               }
                 var _customerId = null;
                 var _customerName = null;
                 var _hubId = null;
                 var _hubName = null;
                 if (_rolesNames === "whadmin") {
                   _hubId = "1";
                   _hubName = "Hyderabad";
                 }
                 if (userO.customerId){
                   _customerId = new String(userO.customer.id);
                   _customerName = userO.customer.name;
                   _hubId = new String(userO.customer.hub.id);
                   _hubName = userO.customer.hub.name;
                 }
                 res.send( {
                    status: "success",
                    userIdentity: {
                    userName: userO.email,
                    displayName: userO.username,
                    attributes: {
                      customerId:_customerId,
                      customerName: _customerName,
                      hubId: _hubId,
                      hubName:_hubName,
                      roles:_rolesNames
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

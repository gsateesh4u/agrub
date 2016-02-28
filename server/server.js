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

app.get('/api/Orders', passport.authenticate('mca-backend-strategy', {session: false}),function(req, res){
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
          console.log("login fails");
          if (err) {
                     res.render('response', {
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
                res.render('response', {
                status: "failure",
                challenge: {
                message: "unknown credentials"
                 }
               });
               return;
             }
              if ( userM ) {
                 var user = userM.toJSON();
                 res.render('response', {
                    status: "success",
                    userIdentity: {
                    userName: user.email,
                    displayName: user.name,
                    attributes: {
                      customerId: new String(user.customer.id),
                      customerName: user.customer.name,
                      hubId: new String(user.customer.hub.id),
                      hubName:user.customer.hub.name
                    }
                  }
                 });
               return; 
             }   
             res.render('response', {
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

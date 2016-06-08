var path = require('path');

var app = require(path.resolve(__dirname, '../server'));
var ds = app.datasources.db;
ds.autoupdate('TransportOperator', function(err) {
  if (err) throw err;
});
ds.autoupdate('Order', function(err) {
  if (err) throw err;
});
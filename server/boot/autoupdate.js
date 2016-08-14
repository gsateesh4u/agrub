var path = require('path');

var app = require(path.resolve(__dirname, '../server'));
var ds = app.datasources.db;
ds.autoupdate('LineItem', function(err) {
  if (err) throw err;
});
ds.autoupdate('PurchaseOrderLine', function(err) {
  if (err) throw err;
});

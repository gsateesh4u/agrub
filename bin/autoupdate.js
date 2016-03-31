var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;
ds.autoupdate('Hub', function(err) {
  if (err) throw err;
});
ds.autoupdate('Customer', function(err) {
  if (err) throw err;
});
ds.autoupdate('ItemCategory', function(err) {
  if (err) throw err;
});
ds.autoupdate('Item', function(err) {
  if (err) throw err;
});
ds.autoupdate('Order', function(err) {
  if (err) throw err;
});
ds.autoupdate('SalesOrder', function(err) {
  if (err) throw err;
});
ds.autoupdate('SalesOrderLine', function(err) {
  if (err) throw err;
});
ds.autoupdate('DeliveryChalan', function(err) {
  if (err) throw err;
});
ds.autoupdate('OrderStatus', function(err) {
  if (err) throw err;
});
ds.autoupdate('SalesOrderStatus', function(err) {
  if (err) throw err;
});
ds.autoupdate('DeliveryChalanStatus', function(err) {
  if (err) throw err;
});
ds.autoupdate('InvoiceStatus', function(err) {
  if (err) throw err;
});
ds.autoupdate('Invoice', function(err) {
  if (err) throw err;
});
ds.autoupdate('Pricing', function(err) {
  if (err) throw err;
});
ds.autoupdate('ItemPrice', function(err) {
  if (err) throw err;
});
ds.autoupdate('user', function(err) {
  if (err) throw err;
});
ds.autoupdate('Role', function(err) {
  if (err) throw err;
});
ds.autoupdate('RoleMapping', function(err) {
  if (err) throw err;
});
ds.autoupdate('DailyMktPriceHistory', function(err) {
  if (err) throw err;
});

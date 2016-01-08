var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;
ds.automigrate('Hub', function(err) {
  if (err) throw err;
});
ds.automigrate('Customer', function(err) {
  if (err) throw err;
});
ds.automigrate('ItemCategory', function(err) {
  if (err) throw err;
});
ds.automigrate('Item', function(err) {
  if (err) throw err;
});
ds.automigrate('Order', function(err) {
  if (err) throw err;
});
ds.automigrate('SalesOrder', function(err) {
  if (err) throw err;
});
ds.automigrate('SalesOrderLine', function(err) {
  if (err) throw err;
});
ds.automigrate('DeliveryChalan', function(err) {
  if (err) throw err;
});
ds.automigrate('OrderStatus', function(err) {
  if (err) throw err;
});
ds.automigrate('SalesOrderStatus', function(err) {
  if (err) throw err;
});
ds.automigrate('DeliveryChalanStatus', function(err) {
  if (err) throw err;
});
ds.automigrate('InvoiceStatus', function(err) {
  if (err) throw err;
});
ds.automigrate('Invoice', function(err) {
  if (err) throw err;
});
ds.automigrate('Pricing', function(err) {
  if (err) throw err;
});
ds.automigrate('ItemPrice', function(err) {
  if (err) throw err;
});

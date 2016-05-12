var path = require('path');

var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.db;
ds.automigrate('Role', function(err) {
  if (err) throw err;
});
ds.automigrate('ACL', function(err) {
  if (err) throw err;
});
ds.automigrate('RoleMapping', function(err) {
  if (err) throw err;
});
ds.automigrate('AccessToken', function(err) {
  if (err) throw err;
});
ds.automigrate('Address', function(err) {
	  if (err) throw err;
});
ds.automigrate('ShippingAddress', function(err) {
	  if (err) throw err;
});
ds.automigrate('BillingAddress', function(err) {
	  if (err) throw err;
});
ds.automigrate('CustLkdItemPrice', function(err) {
  if (err) throw err;
});
ds.automigrate('CustLkdPeriod', function(err) {
  if (err) throw err;
});
ds.automigrate('CustomerUserMap', function(err) {
  if (err) throw err;
});
ds.automigrate('Customer', function(err) {
	  if (err) throw err;
	});
ds.automigrate('DailyMktPriceHistory', function(err) {
  if (err) throw err;
});
ds.automigrate('DailyMktPrice', function(err) {
  if (err) throw err;
});
ds.automigrate('Hub', function(err) {
  if (err) throw err;
});
ds.automigrate('InvoiceStatus', function(err) {
  if (err) throw err;
});
ds.automigrate('Invoice', function(err) {
  if (err) throw err;
});
ds.automigrate('ItemCategory', function(err) {
  if (err) throw err;
});
ds.automigrate('ItemPrice', function(err) {
  if (err) throw err;
});
ds.automigrate('Item', function(err) {
  if (err) throw err;
});
ds.automigrate('Market', function(err) {
  if (err) throw err;
});
ds.automigrate('OrderStatus', function(err) {
  if (err) throw err;
});
ds.automigrate('Order', function(err) {
  if (err) throw err;
});
ds.automigrate('Pricing', function(err) {
  if (err) throw err;
});
ds.automigrate('LineItem', function(err) {
  if (err) throw err;
});
ds.automigrate('PurchaseOrder', function(err) {
	  if (err) throw err;
});
ds.automigrate('PurchaseOrderLine', function(err) {
	  if (err) throw err;
});
ds.automigrate('TransportOperator', function(err) {
  if (err) throw err;
});
ds.automigrate('Uom', function(err) {
	  if (err) throw err;
});
ds.automigrate('user', function(err) {
  if (err) throw err;
});
ds.automigrate('Vendor', function(err) {
  if (err) throw err;
});
ds.automigrate('HubUserMap', function(err) {
  if (err) throw err;
});
ds.automigrate('OrderTracking', function(err) {
	  if (err) throw err;
});
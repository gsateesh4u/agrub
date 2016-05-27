//var appRoot = require('approotpath');

//var appRoot = require(path.resolve(__dirname, '/'));
var path = require('path');

module.exports = function (Model, options) {
  var configFile = options.config;
  if (!configFile) {
    // Works for 99% of cases. For others, set explicit path via options.
    configFile = '../models/' + slugify(Model.modelName) + '.json';
  }

  var config = require(path.resolve(__dirname,configFile));
  
  if (!config || !config.settings || !config.settings.acls) {
    console.error('ClearBaseAcls: Failed to load model config from',configFile);
    //return;
  }

  Model.settings.acls.length = 0;
  config.acls.forEach(function (r) {
    Model.settings.acls.push(r);
  });
};

function slugify(name) {
  name = name.replace(/^[AZ]+/, function (s) { return s.toLowerCase(); });
  return name.replace(/[AZ]/g, function (s) { return '' + s.toLowerCase(); });
}
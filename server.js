var http = require('http');
var httpProxy = require('http-proxy');
var fs = require('fs');
var path = require('path');
var staticBasePath = 'build';
var cache = {};

var mime = {
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  ico: 'image/x-icon'
};

var proxy = httpProxy.createProxyServer({
  target: process.env.CRYPTO_HOST_URL || ''
});

var staticServe = function (req, res) {
  var resolvedBase = path.resolve(staticBasePath);
  var safeSuffix = decodeURI
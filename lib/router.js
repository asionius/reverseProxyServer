'use strict'
let coroutine = require('coroutine');
let net = require('net');
let reverseProxy = require("./reverseProxy.js");

module.exports = function(config) {
    return function(v) {
        let proxy_pass = config.proxy_pass
        let u = new net.Url(proxy_pass)
        let proxyServer = reverseProxy(u.hostname, u.port || 80);
        // reverse proxy server log here
        // console.log("")
        proxyServer(v);
        return;
    }
}
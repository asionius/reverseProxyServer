"use strict"

var coroutine = require("coroutine");
var vm = require("vm");
var http = require('http');
var process = require("process");
var params = process.argv;

var initServers = (server) => {
	var sb = new vm.SandBox(require("./config/depends.js"));
	var config = sb.require('./config/config.js', __filename);
	config.log.forEach(function(cfg) {
		console.add(cfg);
	});

	var serverConf = config.http.server;
	var hdlr = sb.require("./lib/router.js", __filename)(serverConf);
	var svr = new http.Server(serverConf.addr, serverConf.listen, hdlr);

	console.info("server start......");
	svr.run();
}

initServers({});
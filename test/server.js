var http = require('http');
var zlib = require('zlib');

var svr = new http.Server(8080, {
	'/data': v => {
		// var s = zlib.deflate(new Buffer('hello world'))
		// s = zlib.gzip(s);
		// v.response.setHeader('Content-Encoding', 'deflate, gzip');
		// v.response.write(s);
		v.response.write(new Buffer('hello world'), 'GBK');
	},
	'(.*)': () => {
		return http.fileHandler(__dirname)
	}
});
svr.run();
var Net = require("net");
var Io = require("io");

module.exports = function(ip, port) {
	return function proxyer(v) {
		var _bs,
			_ip = v.stream.stream.remoteAddress,
			_u = new Net.Url(v.address),
			_s = new Net.Socket();
		_s.connect(ip, port);
		v.address = _u.path;
		if (_ip) {
			v.setHeader('X-Real-IP', _ip);
		}
		// v.setHeader('Host', u.host);

		v.sendTo(_s);

		_bs = new Io.BufferedStream(_s);
		_bs.EOL = "\r\n";
		v.response.readFrom(_bs);

		_bs.close();
		_s.close();
		_s.dispose();
	};
};
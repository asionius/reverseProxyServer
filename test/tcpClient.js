var net = require('net');
var zlib = require('zlib');

var s = new net.Socket(net.AF_INET, net.SOCK_STREAM);
// s.connect('asionius.com', 80);

// s.send(new Buffer("GET / HTTP/1.0\r\nHost: asionius.com\r\n\r\n"));
// var recv = s.recv();
// console.log(recv.toString());
// s.close();

s.connect('127.0.0.1', 8080);
s.send(new Buffer('GET /data HTTP/1.0\r\nHost: 127.0.0.1\r\n\r\n'));
var recv = s.recv();
var id = recv.toString().indexOf('\r\n\r\n')
recv = recv.slice(id + 4);
console.log(zlib.inflate(zlib.gunzip(recv)).toString());
// console.log(s.recv().toString('hex'))
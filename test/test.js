'use strict'
var vm = require('vm');
var url = require('url');
var punycode = require('punycode');
var proxyUrl = {
	parse: (urlString, parseQueryString, slashesDenoteHost) => {
		if(urlString.indexOf('//') == 0)
		urlString = '//'+punycode.toASCII(urlString.substr(2));
		return url.parse(urlString, parseQueryString);
	}
}
var sb = new vm.SandBox(require('../config/depends.js'));
sb.add('url', proxyUrl);

const {
	getDomain
} = sb.require('tldjs', __filename);
var urlstr = "三和艺轩.com";
console.log(getDomain(urlstr));

// const {
// 	getDomain
// } = require('tldjs', __filename);

// var punycode = require('punycode')
// var urlstr = "三和艺轩.com";
// // var domain = punycode.toASCII(urlstr);
// // console.log(domain);
// console.log(getDomain(urlstr));
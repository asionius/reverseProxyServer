"use strict"
module.exports = {
    log: [{
        type: "file",
        levels: [console.ERROR],
        path: "/var/log/reverseProxy.err.log", // 必选项
        split: "day",
        count: 10
    }, {
        type: "file",
        levels: [console.INFO],
        path: "/var/log/reverseProxy.log", // 必选项
        split: "day", // 选项，可选值为 "day", "hour", "minute", "###k", "###m", "###g"
        count: 10 // 选项，可选范围为 2-128，指定此项时必须提供 split
    }, {
        type: "console"
    }],
    http: {
        server: {
            addr: "",
            listen: 80,
            proxy_set_header: {
                "Host": "$http_host",
                "X-Real-IP": "$remote_addr",
                "X-Forwarded-For": "$proxy_add_x_forwarded_for"
            },
            proxy_redirect: "off",
            proxy_intercept_errors: "on",
            proxy_pass: "http://localhost:8081"
        }
    }
}
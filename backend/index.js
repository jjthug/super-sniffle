'use strict';

const http = require('http')
const express = require('express')
const config = require('./config/config.js')
const app = express()
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require("express-rate-limit")
const MongoDB = require('./db/mongo.js')

// Rate limiter
const apiLimiter = rateLimit({
    max: config.server.apiLimit,
    windowMs: 60 * 60 * 1000, // 1 Hour
    message: "Too many Requests from this IP, please try again after sometime",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


// Server
const server = http.createServer(app)
// app.use(apiLimiter)
app.set('trust proxy', true)
app.use(cors({origin: config.server.cors}))

// The xssFilter middleware sets the X-XSS-Protection header to prevent
// reflected XSS attacks.
// @see https://helmetjs.github.io/docs/xss-filter/
app.use(helmet.xssFilter())

// Frameguard mitigates clickjacking attacks by setting the X-Frame-Options header.
// @see https://helmetjs.github.io/docs/frameguard/
app.use(helmet.frameguard('deny'))

// Don’t Sniff Mimetype middleware, noSniff, helps prevent browsers from trying
// to guess (“sniff”) the MIME type, which can have security implications. It
// does this by setting the X-Content-Type-Options header to nosniff.
// @see https://helmetjs.github.io/docs/dont-sniff-mimetype/
app.use(helmet.noSniff());

// Logging
console.log("Enviornment ======> ", config.env, " <=======")

//HTTPS Handlers
let routes = require('./routes/routes');
app.use('/', routes);

// 404
app.get('*', function(req, res){
    res.status(404).send({});
});

MongoDB.connectDB().
then((newDB) => {
    console.log("DB : Db connected")
    server.listen(config.server.port, config.server.host, () => {
        console.log('listening on http://' + (config.server.host || "0.0.0.0") + ":" + (config.server.port || 5000));
    })
    console.log("System Initialization completed")
}).
catch((err) => {
    console.log(err)
    console.log("DB : Connection error. Stopping")
})
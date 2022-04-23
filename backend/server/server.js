const config = require('../config/config.js')
const http = require('http')
const express = require("express")
const app = express()
const path = require('path')
const merkle = require("../utils/merkle")
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require("express-rate-limit")

//Server
const server = http.createServer(app)

// Rate limiter
const apiLimiter = rateLimit({
    max: config.server.apiLimit,
    windowMs: 60 * 60 * 1000, // 1 Hour
    message: "Too many Requests from this IP, please try again after sometime",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(cors({origin: config.server.cors}))
app.use(helmet.xssFilter())
app.use(helmet.frameguard('deny'))
app.use(helmet.noSniff());

console.log("Environment ======> ", config.env, " <=======")

app.get('/api/merkleproof', merkle.getProof);

app.use(express.static('public'));
app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '../../public', 'index.html'))
    // return res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
server.listen(config.server.port, () => console.log('Listening on port ',config.server.port))

module.exports = app
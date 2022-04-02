const config = require('../config/config.js')
const http = require('http')
const express = require("express")
const app = express()
const path = require('path')
const merkle = require("../utils/merkle")
const cors = require('cors')
const helmet = require('helmet')

//Server
const server = http.createServer(app)

app.use(cors({origin: config.server.cors}))

app.use(helmet.xssFilter())
app.use(helmet.frameguard('deny'))
app.use(helmet.noSniff());

console.log("Environment ======> ", config.env, " <=======")

app.get('/merkleproof', merkle.getProof);

app.use(express.static('public'));
app.get('*', (req, res) => {
    return res.sendFile(path.resolve(__dirname, '../../public', 'index.html'))
    // return res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
server.listen(config.server.port, () => console.log('Listening on port ',config.server.port))

module.exports = app
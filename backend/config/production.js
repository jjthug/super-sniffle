'use strict';

// Global
var path = require('path');
var PROJECT_DIR = path.resolve(__dirname, "..")
var config = {};

// ENV
config.env = 'production'

// Server
config.server = {}
config.server.host = '0.0.0.0'
config.server.port = 5000
config.server.cors = ""

/********************Blockchain NFT*************************/
config.nft = {}

/********************Blockchain NFT*************************/

module.exports = config;
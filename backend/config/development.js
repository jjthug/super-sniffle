'use strict';

// Global
var path = require('path');
var PROJECT_DIR = path.resolve(__dirname, "..")
var config = {};

// ENV
config.env = 'development'

// Server
config.server = {}
config.server.host = '0.0.0.0'
config.server.port = 5001
config.server.cors = "http://45.80.153.7"

/********************Blockchain NFT*************************/
config.nft = {}

/********************Blockchain NFT*************************/

module.exports = config;
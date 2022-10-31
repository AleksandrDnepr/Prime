const { Router } = require('express');
const status = require('./status.js');
const things = require('./things.js');
const agents = require("./agents.js");

module.exports = Router()
    .get('/status', status)
    .use('/things', things)
    .use('/agents', agents)
    


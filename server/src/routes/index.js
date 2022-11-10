const { Router } = require('express');
const status = require('./status.js');
const agents = require("./agents.js");
const properties = require('./properties.js');

module.exports = Router()
    .get('/status', status)
    .use('/agents', agents)
    .use('/properties', properties)
    


const { Router } = require('express');
const status = require('./status.js');
const things = require('./things.js');
const agents = require("./agents.js");
const properties = require('./properties.js');
const authRouter = require('./auth.js');

module.exports = Router()
    .get('/status', status)
    .use('/things', things)
    .use('/agents', agents)
    .use('/properties', properties)
    .use('/auth', authRouter)


const { Router } = require('express');
const passport = require('passport');
const status = require('./status.js');
const agents = require("./agents.js");
const properties = require('./properties.js');
const authRouter = require('./auth.js');

module.exports = Router()
    .get('/status', status)
    .use('/agents', agents)
    .use('/properties', properties)
    .use('/auth', authRouter)


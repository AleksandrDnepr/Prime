const { Router } = require('express');
const status = require('./status.js');
const things = require('./things.js');
const mailer = require("./mailer.js");


module.exports = Router()
    .get('/status', status)
    .use('/things', things)
    .use('/mailer', mailer)

const { Router } = require('express');
const status = require('./status.js');
const things = require('./things.js');
const contact = require("./contact.js");


module.exports = Router()
    .get('/status', status)
    .use('/things', things)
    .use('/contact', contact)


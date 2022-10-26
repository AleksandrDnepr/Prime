const { Router } = require('express');
const status = require('./status.js');
const things = require('./things.js');
const properties = require('./properties.js');


module.exports = Router()
    .get('/status', status)
    .use('/things', things)
    .use('/properties', properties);


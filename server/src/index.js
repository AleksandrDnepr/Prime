const express = require('express');
const router = require('./routes/');
const path = require('path');



express()
    .use(express.static('static'))
    .use(express.json())
    .use('/api', router)
    .listen(3100, () => console.log('Started on :3100'))
    


const express = require('express');
const router = require('./routes/');

express()    
    .use(express.json())
    .use('/api', router)    
    .listen(80, () => console.log('Started on :80'));

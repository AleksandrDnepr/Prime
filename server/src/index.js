const express = require('express');
const router = require('./routes/');
const authRouter = require('./routes/auth');
const path = require('path');
const config = require('config');
const PORT = config.get('port');

express()
    .use('/admin', express.static('admin'))
    .use('/', express.static('static'))
    .use(express.json())
    .use('/api', router)
    .use('/admin', authRouter)
    .use((req, res, next) => {
        res.sendFile(path.join(__dirname, "..", "static", "index.html"));
    })
    .listen(PORT, () => console.log(`Started on :${PORT}`));

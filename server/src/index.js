const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
const router = require('./routes/');
const path = require('path');
const config = require('config');
const PORT = config.get('port');

express()
    .use('/admin', express.static('admin'))
    .use('/', express.static('static'))
    .use(cookieSession({
        name: 'google-auth-session',
        keys: ['key1', 'key2']
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(express.json())
    .use('/api', router)    
    .use((req, res, next) => {
        res.sendFile(path.join(__dirname, "..", "static", "index.html"));
    })
    .listen(PORT, () => console.log(`Started on :${PORT}`));

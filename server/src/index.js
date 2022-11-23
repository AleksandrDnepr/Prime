const express = require('express');
const session = require('express-session');
const passport = require('passport');
const router = require('./routes/');
const path = require('path');
const config = require('config');
const PORT = config.get('port');
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require('./models/');
const sessionSecret = config.get('session_secret');

const store = new SequelizeStore({
    db: db.sequelize,
  });

store.sync();

express()
    .use('/admin', express.static('admin'))
    .use('/', express.static('static'))
    .use(express.json())
    .use(session({ secret: sessionSecret, store: store, resave: false, saveUninitialized: true }))
    .use(passport.session())
    .use('/api', router)
    .use('/admin', (req, res, next) => {
        res.sendFile(path.join(__dirname, "..", "admin", "index.html"));
    })
    .use((req, res, next) => {
        res.sendFile(path.join(__dirname, "..", "static", "index.html"));
    })
    .listen(PORT, () => console.log(`Started on :${PORT}`));

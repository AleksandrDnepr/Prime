const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();
const config = require('config');

passport.use(new GoogleStrategy({
  clientID: config.get('client_id'),
  clientSecret: config.get('client_secret'),
  callbackURL: 'http://localhost:3000/admin/properties',
  scope: [ "https://www.googleapis.com/auth/userinfo.profile" ],
  state: true
},
function(accessToken, refreshToken, profile, cb) {
  console.log({ accessToken, refreshToken, profile });

  let user = {
    name: profile.displayName
  };
  return cb(null, user);
}));

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.name });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

router.get('/login/federated/google', passport.authenticate('google'));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: '/admin/properties',
    failureRedirect: '/admin'
  }))
  router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/admin');
  });

module.exports = router;
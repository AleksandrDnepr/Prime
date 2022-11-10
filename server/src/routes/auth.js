const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router();
const config = require('config');

passport.use(new GoogleStrategy({
  clientID: config.get('client_id'),
  clientSecret: config.get('client_secret'),
  callbackURL: '/oauth2/redirect/google',
  scope: [ 'profile', 'e-mail' ],
  state: true
},
function(accessToken, refreshToken, profile, cb) {
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

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

router.get('/login/federated/google', passport.authenticate('google'));

router.get('/oauth2/redirect/google', passport.authenticate('google', {
    successRedirect: '/admin/property',
    failureRedirect: '/admin'
  }))
  router.post('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/admin');
  });

module.exports = router;
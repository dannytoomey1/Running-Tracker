var express = require('express');
var router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Running Tracker'});
});

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    prompt: "select_account"
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/runs/index',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function(err) {
    if(err) console.log(err)
    res.redirect('/')
  });
});

module.exports = router;

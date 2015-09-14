/**
 * Created by ivan on 01.09.15.
 */

var express = require('express');
var passport = require('passport');
var router = express.Router();


router.post('/', passport.authenticate('local',{
    successRedirect : '/news',
    failureRedirect : '/auth',
    failureFlash : true
}));



module.exports = router;

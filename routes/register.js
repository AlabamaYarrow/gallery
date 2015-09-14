/**
 * Created by ivan on 01.09.15.
 */

var express = require('express');
var router = express.Router();

var User = require('mongoose').model('User');

router.post('/', function(req, res, next) {
    var user = new User({ username: req.body.username, password: req.body.password});
    user.save(function(err) {
        return err
            ? next(err)
            : req.logIn(user, function(err) {
            return err
                ? next(err)
                : res.redirect('/');
        });
    });
});

module.exports = router;
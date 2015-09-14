/**
 * Created by ivan on 01.09.15.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    req.logout();
    res.redirect('/news');
});

module.exports = router;

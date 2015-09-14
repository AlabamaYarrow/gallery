var express = require('express');
var router = express.Router();

/* GET gallery page. */
router.get('/', function(req, res, next) {
    if (req.user) {
        res.redirect('/news')
    } else {
        res.render('auth', { message: req.flash('loginMessage') });
    }
});

module.exports = router;

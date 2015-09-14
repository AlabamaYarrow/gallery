/**
 * Created by ivan on 26.08.15.
 */

var express = require('express');
var router = express.Router();
var fs = require('fs');
var multer  = require('multer');
var upload = multer({
    dest: 'uploads/'
});

router.route('/').post(upload.single('displayImage'), function(req, res, next) {
    res.redirect('/gallery');
});

module.exports = router;

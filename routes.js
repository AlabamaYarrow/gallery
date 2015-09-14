/**
 * Created by ivan on 28.08.15.
 */

module.exports = function(app) {

    app.use(function(req, res, next) {
        res.locals.loggedIn = (req.user) ? true : false;
        next();
    });

    app.use('/', require('./routes/index'));
    app.use('/about', require('./routes/about'));
    app.use('/auth', require('./routes/auth'));
    app.use('/contact', require('./routes/contact'));
    app.use('/gallery', require('./routes/gallery'));
    app.use('/images/*',    require('./routes/images'));
    app.use('/login', require('./routes/login'));
    app.use('/logout',    require('./routes/logout'));
    app.use('/news', require('./routes/news'));
    app.use('/register', require('./routes/register'));
    app.use('/upload', require('./routes/upload'));

};
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var index = require('./routes/index');
var loginApp = require('./routes/loginApp');
var worldwar = require('./routes/worldwar');
var worldwar2 = require('./routes/worldwar2');
var trending = require('./routes/trending');
var top10 = require('./routes/top10');
var map = require('./routes/map');
var gdp = require('./routes/gdp');
var eco = require('./routes/eco');
var healthcare = require('./routes/healthcare');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"KLPY team"}));
app.use('/', index);
app.use('/loginApp', loginApp);
app.use('/worldwar', worldwar);
app.use('/worldwar2', worldwar2);
app.use('/trending', trending);
app.use('/map', map);
app.use('/eco', eco);
app.use('/gdp', gdp);
app.use('/top10', top10);
app.use('/healthcare', healthcare);

//app.use('/signup', signup);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

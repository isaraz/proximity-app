var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors') //added

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var countriesRouter = require('./routes/countries'); //added this one first
var monthsRouter = require('./routes/months');
var typesRouter = require('./routes/types');
var seasonsRouter = require('./routes/seasons');

var app = express();
app.use(cors()) //added

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/countries', countriesRouter); //added this one second
app.use('/months', monthsRouter);
app.use('/types', typesRouter);
app.use('/seasons', seasonsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;

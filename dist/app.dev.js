"use strict";

var express = require('express');

var app = express();

var morgan = require('morgan');

var router = express.Router();

var user = require('./db/userData.json');

app.set('view engine', 'ejs');
app.use('/public', express["static"]('public'));
app.listen(3030);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(router);
app.get('/', function (req, res) {
  res.render('index');
});
app.get('/guntingbatukertas', function (req, res) {
  res.render('guntingbatukertas');
});
app.get('/login', function (req, res) {
  res.render('login');
});
app.post('/login', function (req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var getEmail = user.find(function (x) {
    return x.email === email;
  });
  var getPassword = user.find(function (x) {
    return x.password === password;
  });

  if (getEmail == undefined) {
    res.json("Maaf Email Tidak Ditemukan");
  } else if (getEmail != undefined && getPassword == undefined) {
    res.json("Kata Sandi yang Anda Masukkan Salah!!!");
  } else {
    res.json(getEmail);
  }
});
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).json({
    status: 'fail',
    errors: err.message
  });
});
app.use(function (err, req, res, next) {
  console.error(err);
  res.status(500).json({
    status: 'fail',
    errors: err.message
  });
});
app.use(function (req, res, next) {
  res.status(404).json({
    status: 'fail',
    errors: 'Page not found'
  });
  next();
});
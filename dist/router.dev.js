"use strict";

var express = require('express');

var router = express.Router();

var user = require('./db/userData.json');

router.get('/', function (req, res) {
  res.render('index');
});
router.get('/guntingbatukertas', function (req, res) {
  res.render('guntingbatukertas');
});
router.get('/login', function (req, res) {
  res.render('login');
});
router.post('/login', function (req, res) {
  var _req$body = req.body,
      email = _req$body.email,
      password = _req$body.password;
  var getEmail = user.find(function (x) {
    return x.email === email;
  });
  var getPassword = user.find(function (x) {
    return x.password === password;
  });

  if (!getEmail) {
    res.json("Email not found!");
  } else if (getEmail && !getPassword) {
    res.json("Wrong Password!");
  } else {
    res.json(getEmail);
  }
});
router.use(function (req, res) {
  res.status(404).render('404');
});
module.exports = router;
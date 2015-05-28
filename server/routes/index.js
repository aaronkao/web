(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index', {API_HOST: process.env.API_HOST});
  });


  module.exports = router;

}());

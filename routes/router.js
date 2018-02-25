var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var customer = require('../models/customer.js');
var product = require('../models/product.js');
var order = require('../models/order.js');


router.get('/', function(req, res, next) {
  product.find(function (err, prodetails) {
    if (err) return next(err);
    res.json(prodetails);
  });
});

router.get('/:id', function(req, res, next) {
	console.log(req.params);
  product.find({id : req.params.id}, function (err, post) {
    if (err) return next(err);
    res.json(post);
    console.log(post);
  });
});

router.get('/type/:id', function(req, res, next) {
	console.log(req.params);
  product.find({id : req.params.id},{type : 1}, function (err, type) {
    if (err) return next(err);
    res.json(type);
    console.log(type);
  });
});


module.exports = router;
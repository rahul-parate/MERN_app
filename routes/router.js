var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var customer = require('../models/customer.js');
var product = require('../models/product.js');
var order = require('../models/order.js');
var cart = require('../models/cart.js');


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

// router.post('/cart', function(req, res, next) {
// 	console.log(req);

// 	var new_task = new cart({'cartvalue' : req.body});
// 	  new_task.save(function(err, task) {
// 	    if (err)
// 	      res.send(err);
// 	    res.json(task);
// 	    console.log("CART");
// 	    console.log(task);
// 	  });
// });
var order_id = 0;
router.post('/order', function(req, res, next) {
	console.log(req.body.order);
	order_id = order_id + 1
	var new_task = new customer({name: req.body.name, email:req.body.email});
	  new_task.save(function(err, task) {
	    if (err)
	      res.send(err);
	    // res.json(task);
	    console.log("CUSTOMER");
	    console.log(task);
	  });

	var new_task = new order({id: order_id, name: req.body.name, email:req.body.email, order: req.body.order});
	  new_task.save(function(err, task) {
	    if (err)
	      res.send(err);
	    res.json(task);
	    console.log("ORDER Completed");
	    console.log(task);
	  });
});

module.exports = router;
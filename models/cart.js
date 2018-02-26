var mongoose = require('mongoose');

var cartschema = new mongoose.Schema({
  cartvalue : Array
});

module.exports = mongoose.model('Cart', cartschema);
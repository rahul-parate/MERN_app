var mongoose = require('mongoose');

var productschema = new mongoose.Schema({
  id: String,
  name: String,
  desc: String,
  price: String,
  type: Array
});

module.exports = mongoose.model('Product', productschema);

var Tasks = mongoose.model('Product', productschema);
var todo = new Tasks({id : '102K',name: 'Salwar', desc:'Black color XXL',type:['XXL','XL','M'], price:'9899'});
// Save it to database
todo.save(function(err){
  if(err)
    console.log(err);
  else
    console.log(todo);
});

var mongoose = require('mongoose');

var orderschema = new mongoose.Schema({
  id: String,
  email: String
});

module.exports = mongoose.model('Order', orderschema);

// var Tasks = mongoose.model('Product', productschema);
// var todo = new Tasks({id : '102S',name: 'Shirt', desc:'Blue color XXL', price:'9899'});
// // Save it to database
// todo.save(function(err){
//   if(err)
//     console.log(err);
//   else
//     console.log(todo);
// });

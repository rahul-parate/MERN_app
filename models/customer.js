var mongoose = require('mongoose');

var customerschema = new mongoose.Schema({
  name: String,
  email: String
});

module.exports = mongoose.model('Customer', customerschema);

// var Tasks = mongoose.model('Customer', customerschema);
// var todo = new Tasks({name: 'Woofie', email: 'woofie@gmail.com'});
// // Save it to database
// todo.save(function(err){
//   if(err)
//     console.log(err);
//   else
//     console.log(todo);
// });
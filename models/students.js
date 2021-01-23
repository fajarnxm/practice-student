//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var Student = new Schema({
  name: String,
  age: Number,
  address: String,
  hobbies: [String],
  createdAt: { 
      type: Date, 
      default: Date.now()
    },
});

// Compile model from schema
var StudentModel = mongoose.model('students', Student );

module.exports = {
    StudentModel
}
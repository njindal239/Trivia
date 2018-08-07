const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  firstName: {type: String, required: "First Name cannot be blank!"},
  lastName: {type: String, required: "Last Name cannot be blank!"},
  age: {type: Number, min: [13, "This Trivia is only meant for individuals above 13"]},
  username: {type: String, required: "username cannot be blank!"},
  email: {type: String, required: "Email cannot be blank!"},
  password: {type: String, required: "Password cannot be blank!"}
});

module.exports = mongoose.model('User', UserSchema);

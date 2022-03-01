const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  username: {
    type: String,
    required: [true, "Can't be blank"],
    match: [/^[a-zA-Z0-9]/, "is invalid"],
    index: true,
    lowercase: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true,
    lowercase: true,
    unique: true,
  },
  salt: String,
  hash: String,
});

userSchema.plugin(uniqueValidator, {message: 'already exist.'})
const User = mongoose.model('User', userSchema);

module.exports = User;
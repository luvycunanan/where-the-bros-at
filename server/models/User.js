const mongoose = require('mongoose')

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
  },
  salt: String,
  hash: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
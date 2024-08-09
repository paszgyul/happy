
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  password: String,
  createdAt: Date,
  updatedAt: Date
});

const User = model('User', userSchema);

module.exports = User;
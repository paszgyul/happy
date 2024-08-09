
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const peopleSchema = new Schema({
  name: String,
  title: String,
  short_title: String,
  email: String,
  bio: String,
  image: String,
  sector: String,
  quote: String,
  social: String,
  createdAt: Date,
  updatedAt: Date
});

const People = model('People', peopleSchema);

module.exports = People;

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const peopleSchema = new Schema({
  title: String,
  sector: String,
  location: String,
  statur: String,
  num_of_people: String,
  website: String,
  social: String,
  black_logo: String,
  white_logo: String,
  quote: String,
  ceo_name: String,
  ceo_title: String,
  createdAt: Date,
  updatedAt: Date
});

const People = model('People', peopleSchema);

module.exports = People;
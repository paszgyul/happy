
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const peopleSchema = new Schema({
  title: String,
  quote: String,
  name: String,
  title: String,
  company: String,
  createdAt: Date,
  updatedAt: Date
});

const People = model('People', peopleSchema);

module.exports = People;
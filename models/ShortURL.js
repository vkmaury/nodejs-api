// models/ShortURL.js
const mongoose = require('mongoose');

const ShortURLSchema = new mongoose.Schema({
  longURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('ShortURL', ShortURLSchema);

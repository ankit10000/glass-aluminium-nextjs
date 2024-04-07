// glassSchema.js

const mongoose = require('mongoose');

// Define the schema for the glass
const glassSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productDetail: {
    type: String,
    required: true
  },
  productImage: {
    type: String,
    required: true
  }
});

// Create a model from the schema
const Glass = mongoose.model('Glass', glassSchema);

module.exports = Glass;

// ironSchema.js

const mongoose = require('mongoose');

// Define the schema for the iron
const ironSchema = new mongoose.Schema({
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
const Iron = mongoose.model('Iron', ironSchema);

module.exports = Iron;
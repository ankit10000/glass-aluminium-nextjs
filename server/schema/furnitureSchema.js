// furnitureSchema.js

const mongoose = require('mongoose');

// Define the schema for the glass
const furnitureSchema = new mongoose.Schema({
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
const Furniture = mongoose.model('Furniture', furnitureSchema);

module.exports = Furniture;

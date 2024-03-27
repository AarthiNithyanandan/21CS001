// Import necessary modules (e.g., mongoose for MongoDB)
const mongoose = require('mongoose');

// Define Train Schema
const trainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  origin: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  departureTime: {
    type: String,
    required: true
  },
  arrivalTime: {
    type: String,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  }
});

// Create Train model from the schema
const Train = mongoose.model('Train', trainSchema);

// Export the Train model
module.exports = Train;

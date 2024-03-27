// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config({path:"./config.env"});

// // Create an instance of Express application
const app = express();

// // Define middleware to parse JSON bodies
app.use(express.json());
const dbConnectionString = process.env.dbConnectionString;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB  
mongoose
  .connect(dbConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });
  const trainRoutes = require('../routers/trainRoute');
// // Define route for train-related API
app.use('/api/trains', trainRoute);

// // Define a default route for handling invalid requests
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// // Define port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

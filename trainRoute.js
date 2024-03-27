// Import necessary modules
const express = require('express');

const trainController = require('./Contoller/trainController');

// Create an instance of Express router
const router = express.Router();

// Define routes for trainController methods
router.get('/search', trainController.searchTrains);
router.get('/:trainId', trainController.getTrainDetails);
router.post('/book', trainController.bookTicket);
router.delete('/cancel/:ticketId', trainController.cancelReservation);

// Export the router
module.exports = router;

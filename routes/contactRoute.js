// server/routes/contactRoute.js

const express = require('express');
const router = express.Router();

// Import the controller function we want to use
const { submitContactForm } = require('../controllers/contactController');

// This line says: "When a POST request is made to the URL '/contact',
// run the 'submitContactForm' function."
router.post('/contact', submitContactForm);

// This makes the router available to be used by our main server file
module.exports = router;
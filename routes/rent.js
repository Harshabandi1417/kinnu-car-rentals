// routes/rent.js
const express = require('express');
const router = express.Router();

// Example route for renting a vehicle
router.get('/rent', (req, res) => {
    const vehicle = {
        name: "Toyota Camry",
        price: 50,
        description: "A comfortable and reliable sedan."
    };
    const vehicles = {
        name: "ertiga",
        price: 50,
        description: "A comfortable and reliable sedan."
    };
    const vehicless = {
        name: "Belleno",
        price: 50,
        description: "A comfortable and reliable sedan."
    };
    res.render('vehicle', { vehicle }); // Pass the vehicle data to the template
});

// Example route for user reviews
router.get('/reviews', (req, res) => {
    const reviews = [
        { name: "John Doe", rating: 5, comment: "Great experience!" },
        { name: "Jane Smith", rating: 4, comment: "Very satisfied." }
    ];
    res.render('reviews', { reviews }); // Pass the reviews to the template
});

// Example route for thank you message
router.get('/thank-you', (req, res) => {
    const message = "Thank you for your feedback!";
    res.render('thank-you', { message }); // Pass the message to the template
});

module.exports = router;

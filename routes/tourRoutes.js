const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');
// 3) ROUTE
// TOUR

router
    .route('/')
    .get(tourController.getAllTour)
    .post(tourController.createTour);
router
    .route('/:id')
    .get(tourController.getTour)
    .delete(tourController.deleteTour)
    .patch(tourController.updateTour);
// USER

module.exports = router;
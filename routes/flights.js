const express = require('express');
const router = express.Router();
const flightsCtrl= require('../controllers/flights');

router.post('/nationals/:id/flights', flightsCtrl.create);

module.exports = router;
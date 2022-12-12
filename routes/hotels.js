const express = require('express');
const router = express.Router();
const hotelsCtlr = require('../controllers/hotels');

router.get('/nationals/:id', hotelsCtlr.new);
router.post('/nationals/:id/hotels', hotelsCtlr.create);


module.exports = router;
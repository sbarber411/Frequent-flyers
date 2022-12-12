const express = require('express');
const router = express.Router();
const nationalCtrl = require('../controllers/nationals');

// router.get('/national', function(req, res){res.send('this works')})
const isLoggedIn = require('../config/auth')
router.get('/new', nationalCtrl.new);
router.get('/', nationalCtrl.index);
router.post('/', nationalCtrl.create);
router.get('/:id', nationalCtrl.show);
router.put('/:id', nationalCtrl.update)
router.get('/:id/edit', nationalCtrl.edit)
router.delete('/:id', nationalCtrl.delete);

module.exports = router;

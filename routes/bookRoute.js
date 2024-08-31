const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Route to get all clinics with pagination

router.post('/', bookController.create);
router.get('/', bookController.findAll);
router.get('/:id', bookController.findOne);
router.patch('/:id', bookController.update);
router.delete('/:id', bookController.delete);
router.delete('/', bookController.deleteAll);

module.exports = router;

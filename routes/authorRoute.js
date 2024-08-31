const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Route to get all clinics with pagination

router.post('/', authorController.create);
router.get('/', authorController.findAll);
router.patch('/:id', authorController.update)
router.get('/:id', authorController.findOne);
router.delete('/:id', authorController.delete);
router.delete('/', authorController.deleteAll);


module.exports = router;

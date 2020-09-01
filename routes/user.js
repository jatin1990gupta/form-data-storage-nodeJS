const express = require('express');

const userController = require('../controllers/user')

const router = express.Router();

router.get('/', userController.getIndex);

router.post('/submit-data', userController.postData);

module.exports = router;
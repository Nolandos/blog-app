const express = require('express');

const mailControllers = require('../controllers/mailControllers');

//ROUTER module
const router = express.Router();

//sendEmail
router.post('/send', mailControllers.sendEmail );

module.exports = router;
const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/whatsappController');

// Route to send a poll URL via WhatsApp
router.post('/send-poll', whatsappController.sendPoll);

// Route to receive incoming messages (if needed)
router.post('/incoming', whatsappController.handleIncomingMessage);

module.exports = router;
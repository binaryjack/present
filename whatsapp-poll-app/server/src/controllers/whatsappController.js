// whatsappController.js

const WhatsAppService = require('../services/whatsappService');

exports.sendPollLink = async (req, res) => {
    const { pollUrl, message, phoneNumber } = req.body;

    try {
        const response = await WhatsAppService.sendMessage(phoneNumber, message + ' ' + pollUrl);
        res.status(200).json({ success: true, response });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ success: false, message: 'Failed to send message' });
    }
};
const axios = require('axios');

const WHATSAPP_API_URL = 'https://api.whatsapp.com/send';

const sendWhatsAppMessage = async (phoneNumber, message) => {
    try {
        const response = await axios.post(WHATSAPP_API_URL, {
            phone: phoneNumber,
            text: message,
        });
        return response.data;
    } catch (error) {
        console.error('Error sending WhatsApp message:', error);
        throw new Error('Failed to send WhatsApp message');
    }
};

module.exports = {
    sendWhatsAppMessage,
};
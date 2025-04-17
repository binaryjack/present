export const SEND_WHATSAPP_MESSAGE_REQUEST = 'SEND_WHATSAPP_MESSAGE_REQUEST';
export const SEND_WHATSAPP_MESSAGE_SUCCESS = 'SEND_WHATSAPP_MESSAGE_SUCCESS';
export const SEND_WHATSAPP_MESSAGE_FAILURE = 'SEND_WHATSAPP_MESSAGE_FAILURE';

export const sendWhatsappMessageRequest = (messageData) => ({
    type: SEND_WHATSAPP_MESSAGE_REQUEST,
    payload: messageData,
});

export const sendWhatsappMessageSuccess = (response) => ({
    type: SEND_WHATSAPP_MESSAGE_SUCCESS,
    payload: response,
});

export const sendWhatsappMessageFailure = (error) => ({
    type: SEND_WHATSAPP_MESSAGE_FAILURE,
    payload: error,
});
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sendWhatsappMessage } from '../../../redux/modules/whatsapp/actions';

const WhatsappSender = () => {
    const [pollUrl, setPollUrl] = useState('');
    const [message, setMessage] = useState('');
    const dispatch = useDispatch();

    const handleSend = () => {
        if (pollUrl && message) {
            dispatch(sendWhatsappMessage({ pollUrl, message }));
            setPollUrl('');
            setMessage('');
        } else {
            alert('Please fill in both fields.');
        }
    };

    return (
        <div>
            <h2>Send Poll via WhatsApp</h2>
            <input
                type="text"
                placeholder="Poll URL"
                value={pollUrl}
                onChange={(e) => setPollUrl(e.target.value)}
            />
            <textarea
                placeholder="Custom Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default WhatsappSender;
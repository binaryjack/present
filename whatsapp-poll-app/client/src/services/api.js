import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Adjust the URL as needed

export const submitVote = async (pollId, voteData) => {
    try {
        const response = await axios.post(`${API_URL}/polls/${pollId}/votes`, voteData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const fetchPolls = async () => {
    try {
        const response = await axios.get(`${API_URL}/polls`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const createPoll = async (pollData) => {
    try {
        const response = await axios.post(`${API_URL}/polls`, pollData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const sendWhatsAppMessage = async (messageData) => {
    try {
        const response = await axios.post(`${API_URL}/whatsapp/send`, messageData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};
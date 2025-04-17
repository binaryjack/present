import axios from 'axios';

const API_URL = 'http://localhost:5000/api/polls';

export const createPoll = async (pollData) => {
    const response = await axios.post(`${API_URL}`, pollData);
    return response.data;
};

export const submitVote = async (pollId, voteData) => {
    const response = await axios.post(`${API_URL}/${pollId}/votes`, voteData);
    return response.data;
};

export const getPolls = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
};

export const getPollResults = async (pollId) => {
    const response = await axios.get(`${API_URL}/${pollId}/results`);
    return response.data;
};
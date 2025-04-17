// server/src/controllers/pollController.js

const Poll = require('../models/Poll');
const Vote = require('../models/Vote');

// Create a new poll
exports.createPoll = async (req, res) => {
    try {
        const { question } = req.body;
        const newPoll = await Poll.create({ question });
        res.status(201).json(newPoll);
    } catch (error) {
        res.status(500).json({ message: 'Error creating poll', error });
    }
};

// Get all polls
exports.getPolls = async (req, res) => {
    try {
        const polls = await Poll.find();
        res.status(200).json(polls);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching polls', error });
    }
};

// Submit a vote
exports.submitVote = async (req, res) => {
    try {
        const { pollId, vote, name } = req.body;
        const newVote = await Vote.create({ pollId, vote, name });
        res.status(201).json({ message: `Thank you ${name} for your vote. We consider you will ${vote === 'yes' ? 'attend' : 'be absent'}.` });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting vote', error });
    }
};

// Get votes for a specific poll
exports.getVotesForPoll = async (req, res) => {
    try {
        const { pollId } = req.params;
        const votes = await Vote.find({ pollId });
        res.status(200).json(votes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching votes', error });
    }
};
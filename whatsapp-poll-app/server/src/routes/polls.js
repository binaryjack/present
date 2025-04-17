const express = require('express');
const router = express.Router();
const pollController = require('../controllers/pollController');

// Route to create a new poll
router.post('/', pollController.createPoll);

// Route to get all polls
router.get('/', pollController.getAllPolls);

// Route to get a specific poll by ID
router.get('/:pollId', pollController.getPollById);

// Route to submit a vote for a specific poll
router.post('/:pollId/vote', pollController.submitVote);

// Route to get results for a specific poll (admin only)
router.get('/:pollId/results', pollController.getPollResults);

module.exports = router;
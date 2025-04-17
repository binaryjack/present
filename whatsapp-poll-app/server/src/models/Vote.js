const mongoose = require('mongoose');

const voteSchema = new mongoose.Schema({
    pollId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Poll'
    },
    userName: {
        type: String,
        required: true
    },
    vote: {
        type: String,
        enum: ['Yes', 'No'],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Vote = mongoose.model('Vote', voteSchema);

module.exports = Vote;
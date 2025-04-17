const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    options: {
        type: [String],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vote',
    }],
});

const Poll = mongoose.model('Poll', PollSchema);

module.exports = Poll;
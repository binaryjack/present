const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    votes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vote',
    }],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
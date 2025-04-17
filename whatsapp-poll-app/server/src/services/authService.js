// This file contains functions for handling authentication logic.

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const authService = {
    register: async (userData) => {
        const { firstName, email, password } = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ firstName, email, password: hashedPassword });
        return await newUser.save();
    },

    login: async (email, password) => {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { token, user };
    },

    verifyToken: (token) => {
        return jwt.verify(token, process.env.JWT_SECRET);
    },

    getUserById: async (id) => {
        return await User.findById(id);
    }
};

module.exports = authService;
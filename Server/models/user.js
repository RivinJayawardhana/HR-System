// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    forms: [
        {
            formName: String,
            isFilled: { type: Boolean, default: false },
            details: Object,  // Schema for each form can be customized
        }
    ],
    role: { type: String, default: 'employee' }
});

module.exports = mongoose.model('User', userSchema);

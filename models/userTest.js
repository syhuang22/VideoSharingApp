const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
        type: String 
    },
    firstName: { 
        type: String 
    }
});

module.exports = mongoose.model('User', userSchema);
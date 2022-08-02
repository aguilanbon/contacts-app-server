const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    contacts: [{
        type: Schema.Types.ObjectId,
        ref: 'Contact'
    }]
}, {timestamps: true})

module.exports = mongoose.model('User', userSchema)
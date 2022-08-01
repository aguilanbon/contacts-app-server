const mongoose = require('mongoose')

const Schema = mongoose.Schema

const contactSchema = new Schema({
    fName: {
        type: String,
        required: true
    },
    lName: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true,
    },
    bday: {
        type: Date,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Contact', contactSchema)
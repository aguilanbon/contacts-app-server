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
        required: true,
    },
    bday: {
        type: Date,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: 'user'
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    contactImage: {
        type: String,
        required: true,
        default: 'avatar'
    }
}, {timestamps: true})

module.exports = mongoose.model('Contact', contactSchema)
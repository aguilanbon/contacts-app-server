const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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
    bday: {
        type: Date,
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
    }],
    requests: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
}, {timestamps: true})

userSchema.pre('save', async function(next) {
	const saltRounds = 10;
	this.password = await bcrypt.hash(this.password, saltRounds);
	next();
});

module.exports = mongoose.model('User', userSchema)
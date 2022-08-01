const User = require('../models/userModel')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createUser = async (req,res) => {
    try {
        const user = await User.create({...req.body})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllUsers,
    createUser
}
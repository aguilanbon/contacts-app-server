const User = require('../models/userModel')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({updatedAt: -1})
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const logInUser = async (req, res) => {
    const {username, password} = req.body

    try {
        const user = await User.findOne({username}).populate('contacts')
        if(!user) {
            res.status(404).json({msg: 'username or password incorrect'})
        }

        if(password !== user.password) {
            res.status(404).json({msg: 'username or password incorrect'})
        }
        res.status(200).json(user)
        
    } catch (error) {
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

const findUser = async (req, res) => {
    const {id} = req.params

    try {
        const user = await User.findById({_id: id}).populate('requests').populate('friends')
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const editUser = async (req, res) => {
    const {id} = req.params
    try {
        const user = await User.findOneAndUpdate({_id: id}, {...req.body})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteUser = async (req, res) => {
    const {id} = req.params
    
    try {
        const user = await User.findOneAndDelete({_id: id})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const sendFriendRequest = async (req, res) => {
    const {id} = req.params
    const {reqId} = req.body

    try {
        const user = await User.findOneAndUpdate({_id: id}, {$push : {requests: reqId}})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteRequest = async (req,res) => {
    const {id} = req.params
    const {reqId} = req.body

    try {
        const user = await User.findOneAndUpdate({_id: reqId}, {$pull : {requests: id}})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const acceptRequest = async (req, res) => {
    const {id} = req.params
    const {reqId} = req.body

    try {
        const user = await User.findOneAndUpdate({_id: reqId}, {$pull : {requests: id}, $push : {friends: id}})
        const otherUser = await User.findOneAndUpdate({_id: id}, {$push : {friends: user._id}})
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getAllUsers,
    createUser,
    logInUser,
    findUser,
    editUser,
    deleteUser,
    sendFriendRequest,
    deleteRequest,
    acceptRequest
}
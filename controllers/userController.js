const User = require('../models/userModel')


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({})
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
            res.status(404).json({msg: 'User not found'})
        }

        if(password !== user.password) {
            res.status(404).json({msg: 'incorrect password'})
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
        const user = await User.findById({_id: id})
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

module.exports = {
    getAllUsers,
    createUser,
    logInUser,
    findUser,
    editUser,
    deleteUser
}
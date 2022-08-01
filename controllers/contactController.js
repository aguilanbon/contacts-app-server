const Contact = require('../models/contactModel')
const mongoose = require('mongoose')

const allUserContacts = async (req, res) => {
    try {
        const userContacts = await Contact.find({}).sort({createdAt: -1})
        res.status(200).json(userContacts)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const createUserContact = async (req, res) => {
    const {fName, lName, address, phone, bday} = req.body

    try {
        const newContact = await Contact.create({fName, lName, address, phone, bday})
        res.status(200).json(newContact)

    } catch (error) {
        res.status(400).json({mssg: error.message})
    }
}

const getUserContact = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    try {
        const foundContact = await Contact.findById(id)
        
        if(!foundContact) {
            return res.status(400).json({error: 'contact not found'})
        }

        res.status(200).json(foundContact)

    } catch (error) {
        res.status(400).json({mssg: error.message})
    }
}

const updateUserContact = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    try {
        const foundContact = await Contact.findOneAndUpdate({_id: id}, {...req.body})

        if(!foundContact) {
            return res.status(400).json({error: 'contact not found'})
        }
        res.status(200).json(foundContact)
        
    } catch (error) {
        res.status(400).json({mssg: error.message})
    }

}

const deleteUserContact = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such contact'})
    }

    try {
        const foundContact = await Contact.findOneAndDelete({_id: id})

        if(!foundContact) {
            return res.status(400).json({error: 'contact not found'})
        }

        res.status(200).json({mssg: 'contact deleted'})
    } catch (error) {
        res.status(400).json({mssg: error.message})
    }
}


module.exports = {
    allUserContacts,
    createUserContact,
    getUserContact,
    updateUserContact,
    deleteUserContact
}
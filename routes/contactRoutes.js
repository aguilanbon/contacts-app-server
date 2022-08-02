const express = require('express')
const {allUserContacts ,createUserContact, getUserContact, getUserContacts, updateUserContact, deleteUserContact} = require('../controllers/contactController')


const router = express.Router()

router.get('/', allUserContacts)

router.get('/single/:id', getUserContact)
router.get('/:id', getUserContacts)

router.post('/', createUserContact)

router.patch('/:id', updateUserContact)

router.delete('/:id', deleteUserContact)



module.exports = router
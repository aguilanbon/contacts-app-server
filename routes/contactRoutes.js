const express = require('express')
const {allUserContacts ,createUserContact, getUserContact, updateUserContact, deleteUserContact} = require('../controllers/contactController')


const router = express.Router()

router.get('/', allUserContacts)

router.get('/:id', getUserContact)

router.post('/', createUserContact)

router.patch('/:id', updateUserContact)

router.delete('/:id', deleteUserContact)



module.exports = router
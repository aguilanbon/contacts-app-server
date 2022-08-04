const express = require('express')
const multer = require('multer')
const path = require('path')
const {allUserContacts ,createUserContact, getUserContact, getUserContacts, updateUserContact, deleteUserContact} = require('../controllers/contactController')

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname + '../../public/uploads'))
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    } 
})

const upload = multer({storage: storage})

router.get('/', allUserContacts)
router.get('/single/:id', getUserContact)
router.get('/:id', getUserContacts)
router.post('/',createUserContact)
router.patch('/:id',upload.single('contactImage') ,updateUserContact)
router.delete('/:id', deleteUserContact)



module.exports = router
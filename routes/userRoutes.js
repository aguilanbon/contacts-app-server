const express = require('express')
const { getAllUsers, createUser, logInUser, findUser, editUser, deleteUser, sendFriendRequest, deleteRequest, acceptRequest, shareUserContact, deleteFriend } = require('../controllers/userController')
const multer = require('multer')
const path = require('path')

const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname + '../../public/uploads/users'))
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    } 
})

const upload = multer({storage: storage})

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', findUser)
router.patch('/:id', upload.single('userImage') ,editUser)
router.patch('/fr/:id', sendFriendRequest)
router.patch('/frd/:id', deleteRequest)
router.patch('/fra/:id', acceptRequest)
router.patch('/frdel/:id', deleteFriend)
router.patch('/share/:id', shareUserContact)
router.delete('/:id', deleteUser)
router.post('/signin', logInUser)

module.exports = router
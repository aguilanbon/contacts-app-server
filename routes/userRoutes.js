const express = require('express')
const { getAllUsers, createUser, logInUser, findUser, editUser, deleteUser, sendFriendRequest } = require('../controllers/userController')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', findUser)
router.patch('/:id', editUser)
router.patch('/fr/:id', sendFriendRequest)
router.delete('/:id', deleteUser)
router.post('/signin', logInUser)

module.exports = router
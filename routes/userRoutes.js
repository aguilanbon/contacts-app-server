const express = require('express')
const { getAllUsers, createUser, logInUser, findUser, editUser } = require('../controllers/userController')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', findUser)
router.patch('/:id', editUser)
router.post('/signin', logInUser)

module.exports = router
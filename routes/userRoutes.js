const express = require('express')
const { getAllUsers, createUser, logInUser } = require('../controllers/userController')

const router = express.Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.post('/signin', logInUser)

module.exports = router
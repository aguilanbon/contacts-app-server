
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const contactsRoutes = require('./routes/contactRoutes')
const userRoutes = require('./routes/userRoutes')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static( path.join( __dirname, 'public' ) ) )
app.use('/api/contacts',contactsRoutes)
app.use('/api/users', userRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to db')
        app.listen(process.env.PORT, () => console.log(`server running at: ${process.env.PORT}`))
    })
    .catch(e => console.log(e))

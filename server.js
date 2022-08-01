
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const contactsRoutes = require('./routes/contacts')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/contacts',contactsRoutes)


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('connected to db')
        app.listen(process.env.PORT, () => console.log(`server running at: ${process.env.PORT}`))
    })
    .catch(e => console.log(e))

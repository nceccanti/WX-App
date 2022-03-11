const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/error')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users', require('./routes/user.route'))
app.use('/api/road', require('./routes/road.route'))
app.use('/api/wx', require('./routes/wx.route'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
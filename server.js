//Dependencies
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = 3000
const MONGODB_URI = 'mongodb://localhost:27017'+ '/towns'


const whitelist = ['http://localhost:3003', 'https://fathomless-sierra-68956.herokuapp.com']
const corsOptions = {
  origin (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// middleware
app.use(express.json()) // use .json(), not .urlencoded()
app.use(cors(corsOptions))


// Fix depreciation warnings
mongoose.set('useFindAndModify', false)

// Database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
mongoose.connection.once('open', () => {
  console.log('connected to mongoose...')
})

app.get('/', (req, res) => {
    res.send("Hello World")
})
app.get('/towns', (req,res )=>{
    res.send('Towns rocks')
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})
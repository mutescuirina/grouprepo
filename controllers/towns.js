const express = require('express')
const towns = express.Router()
const Town = require('../models/towns')

//Create Route

towns.post('/', (req, res) => {
    Town.create(req.body, (error, createdTown) => {
        if(error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).send(createdTown)
    })
})

//Index Route
towns.get('/', (req, res) => {
    Town.find({}, (error, foundTowns) => {
        if(error) {
            res.status(400).json({error: error.message})
        }
        res.status(200).json(foundTowns)
    })
})

module.exports = towns
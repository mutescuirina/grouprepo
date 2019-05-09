const express = require('express')
const towns = express.Router()
const Town = require('../models/towns')

//Create Route
towns.post('/', (req, res) => {
    Town.create(req.body, (error, createdTown) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdTown)
    })
})

//Index Route
towns.get('/', (req, res) => {
    Town.find({}, (error, foundTowns) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(foundTowns)
    })
})

//Delete
towns.delete('/:id', (req, res) => {
    Town.findByIdAndRemove(req.params.id, (error, deletedTown) => {
        if (error) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(deletedTown)
    })
})

//Town
towns.put('/:id', (req, res) => {
    Town.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    }, (err, updatedTown) => {
        if (err) {
            res.status(400).json({ error: error.message })
        }
        res.status(200).json(updatedTown)
    })
})

module.exports = towns
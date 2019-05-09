const mongoose = require('mongoose')

const townsSchema = mongoose.Schema({
    name:{type: String, required: true},
    population:{type: Number},
    coast: {type:Boolean, default: false}
})
module.exports = mongoose.model('Town', townsSchema )
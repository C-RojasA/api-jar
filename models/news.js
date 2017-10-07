'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NewsSchema = Schema ({
 
    title: String,
    subtitle: String,
    text: String,
    picture: String,
    //date: date
})

module.exports = mongoose.model('News', NewsSchema)
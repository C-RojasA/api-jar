'use strict'

const express = require('express')
const api = express.Router()
const newsCtrl = require('../controllers/news')

api.get('/news', newsCtrl.getNews)
api.get('/news/:newsId', newsCtrl.getNew)
api.post('/news', newsCtrl.saveNews)
api.put('/news/:newsId', newsCtrl.updateNews)
api.delete('/news/:newsId', newsCtrl.deleteNews)

module.exports = api
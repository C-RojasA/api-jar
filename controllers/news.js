'use strict'

const News = require('../models/news') 

// Get all news 
function getNews (req, res) {
    News.find({}, (err, news) => {
        if(err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}`})
        if(!news) return res.status(404).send({ message: `No Existen Noticias Almacenadas`})

        res.status(200).send({ news })
    })
}

// Get News for id
function getNew (req, res) {
    let newsId = req.params.newsId
    
    News.findById(newsId, (err, news) => {
        if (err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}`})
        if(!news) return res.status(404).send({ message: `La Noticia no existe`}) 
    
        res.status(200).send({ news })
    })    
}

function saveNews (req, res) {
    console.log('POST /api/product')
    console.log(req.body)

    let news = new News()

    news.title = req.body.title,
    news.subtitle = req.body.subtitle,
    news.text = req.body.text,
    news.picture = req.body.picture,
    news.date = req.body.date

    news.save((err, newsStored) => {
        if(err) res.status(500).send({ messsage: `Error al guardar en la Base de Datos: ${err}`}) 
            
        res.status(200).send({ news: newsStored })
    })
}

// Update news
function updateNews (req, res) {
    let newsId = req.params.newsId
    let update = req.body

    News.findByIdAndUpdate(newsId, update, (err, newsUpdate) => {
        if (err) res.state(500).send({ message : `Error al actualizar el producto: ${err}`})

        res.status(200).send({ news: newsUpdate })
    })
}

function deleteNews (req, res) {
    let newsId = req.params.newsId
    
    News.findById(newsId, (err, news) => {
        if(err) res.status(500).send({ message: `Error al borrar la noticia: ${err}`})
    
        news.remove(err => {
            if(err) res.status(500).send({ message: `Error al borrar la noticia: ${err}`})
    
            res.status(200).send({ message: 'La Noticia ha sido eliminada'})
        })
    })
}

module.exports = {
    getNew,
    getNews,
    saveNews,
    updateNews,
    deleteNews
}

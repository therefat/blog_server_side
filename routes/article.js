const express = require('express');
const routes = express.Router();
const {getSingelId,
    getAllArticle,
    createArticle,
    updteArticle,
    deleteArticle
    } = require('../controller/articleController')

routes.get('/',getAllArticle)
routes.get('/:id',getSingelId)
routes.post('/',createArticle)
routes.patch('/:id',updteArticle)
routes.delete('/:id',deleteArticle)
module.exports = routes
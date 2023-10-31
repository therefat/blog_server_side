const express = require('express');
const routes = express.Router();
const {getSingelId,
    getAllArticle,
    createArticle
    } = require('./controller/articleController')

routes.get('/',getAllArticle)
routes.get('/:id',getSingelId)
routes.post('/',createArticle)
module.exports = routes
const express = require('express');
const routes = express.Router();
const {getSingelId,
    getAllArticle,
    createArticle,
    updteArticle,
    deleteArticle
    } = require('../controller/articleController')
const multer = require('multer')
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,'./uploads')
    },
    filename : (req,file,cb) => {
        cb(null,`${Date.now()}-${file.originalname}`)
    }

})
const upload = multer({storage});
routes.get('/',getAllArticle)
routes.get('/:id',getSingelId)
routes.post('/',upload.single('image'),createArticle)
routes.patch('/:id',updteArticle)
routes.delete('/:id',deleteArticle)
module.exports = routes
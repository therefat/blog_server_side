const path = require('path')
const Article = require('../model/Article');
const ErrorHandler = require('../utills/ErrorHandler');

const createArticle = async (req,res,next) => {
    const  {title,body,isPublished,password,confirmPassword} = req.body;
    console.log(title)
    if(!title){
        return next(ErrorHandler.validationError('Title is required'))
    }
    
        // return next(ErrorHandler.serverError())
    
    if(!req.file){
      return next(ErrorHandler.validationError('Image is required'))
    }
    const images = req.file.filename
    
    const parentPath = path.dirname(__dirname)
    const image = path.join(parentPath,'uploads',images)
    try{
     const article = new Article({title,body,image,isPublished,password,confirmPassword})
     await article.save()
     return res.status(201).json({
         message: "Article Created succesfuly"
     })
    } catch(error){
     console.log('Error Occorue' + error)
     return res.json({
        error : error.message
     })
    }
 }
const getSingelId = async (req,res) => {
    const id = req.params.id;

    try {
        const article = await Article.findById(id)
        res.status(200).json({
            data : article
        })
    } catch (error) {
        console.log(error)
    }
}
const getAllArticle = async (req,res) => {
    try{
      const result =   await Article.find()
      res.status(200).json({
        total: result.length,
        data : result
      })
    }catch(error){
        console.log('Error' + error)
    }
    
}
const updteArticle = async (req,res) => {
    const {title} = req.body;
    const id = req.params.id;

    try {
        const article = await Article.findByIdAndUpdate(id,{$set : {title}}, {new : true})
        res.status(200).json({
            message: 'updated successfuly',
            article
            
        })
    } catch (error) {
        console.log(error)
    }
}
const deleteArticle = async (req,res) => {
    
    const id = req.params.id;

    try {
       await Article.findByIdAndDelete(id)
        res.status(200).json({
            message: 'deleted successfuly',
            
            
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getSingelId,
    getAllArticle,
    createArticle,
    updteArticle,
    deleteArticle
}
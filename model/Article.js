const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    isPublished: Boolean
},{
    timestamps: true
})
const Article = mongoose.model('Article',articleSchema)
module.exports = Article
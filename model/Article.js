const mongoose = require('mongoose');
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: [20,"minimum 20 word need"],
        maxLength: [30,"maximum 30 word need"],
        required : [true,"Article require a title"],
        unique : [true, "title must be unique"]
    },
    image: String,
    body: {
        type : String,
        required : [true,"Body is required"]
    },
    isPublished: {
        type: Boolean,
        default: true,
    },
    password : {
        type : String,
        
    },
    confirmPassword: {
        type: String,
        validate : [
            function (value)  {
                 if(password != confirmPassword){
                    return false
                 }
             },
             "Password  does't match"
         ]
    }
},{
    timestamps: true
})
const Article = mongoose.model('Article',articleSchema)
module.exports = Article
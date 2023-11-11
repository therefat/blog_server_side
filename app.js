const express = require('express')
const mongoose = require('mongoose')
const articleRoutes = require('./routes/article')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/article',articleRoutes)
app.get('/',(req,res) => {
    res.json({
        message : 'hello world'
    })
})

app.listen(8080,() => {
    console.log('App is running on port 6000');
    mongoose.connect( 
        'mongodb://127.0.0.1:27017/devtoclone', 
        {  useNewUrlParser: true } 
    ) 
        .then((data) => {
            console.log('DB Connected...');
        }) 
        .catch((err) => {
            console.log('Error: ' + err);
        })
   
})
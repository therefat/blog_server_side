const express = require('express')
const articleRoutes = require('./routes/article')
const app = express()
app.use(express.json())
app.use('/article',articleRoutes)
app.get('/',(req,res) => {
    res.json({
        message : 'hello world'
    })
})

app.listen(6000,() => {
    console.log('surver is running')
})
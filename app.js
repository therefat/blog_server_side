const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.json({
        message : 'hello world'
    })
})

app.listen(6000,() => {
    console.log('surver is running')
})
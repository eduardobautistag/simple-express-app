const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 8080

app.use(bodyParser.json())

app.get('/health',(req,res) => {
    res.header({ "System-Health":true })
    res.sendStatus(204)
})

app.get('/hellow',(req,res) => {
    res.send('Hola mundo');
    res.sendStatus(204)
})

app.get('/',(req,res) => {
    res.send('Primer mensaje');
    res.sendStatus(204)
})

app.listen(port, ()=>{
    console.log('App listening on port: '+ port)
})
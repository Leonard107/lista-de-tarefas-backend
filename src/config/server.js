const port = 3003

//O body-parser ele faz o parser do corpo da requisição
const bodyParser = require('body-parser')
//Servidor web
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true}))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function () {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server
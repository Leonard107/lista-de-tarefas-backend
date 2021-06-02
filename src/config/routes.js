const express = require('express')

//Exportando uma função que recebe um parametro
module.exports = function(server){
    //Api Routes
    const router = express.Router()
    
    //Esse router sempre vai ser chamado quando for digitado '/api'
    server.use('/api', router)

    //Indo pegar o listaService.js
    const listaService = require('../api/lista/listaService')
    //Esse metodo register vai usar todos os metodos que eu declarei no lista service, como o get, post, put e delete.
    //E vai usar e eu vou criar o meu WebService com essa url base /listas
    listaService.register(router, '/listas')
}
//O mongoose server tanto para fazer o mapeamento dos nossos objetos em javascript para os documentos que vão para o mongo.
//Como ele também server para fazer essa conexão ou abrir uma conexão com o mongo.
const mongoose = require('mongoose');
//Para o mongoose utilizar o Promise do proprio node
mongoose.Promise = global.Promise
//O nome do nosso banco vai ser lista
module.exports = mongoose.connect('mongodb://localhost/lista')
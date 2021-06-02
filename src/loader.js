const server = require('./config/server')
require('./config/database')
//Passando o server como parametro
require('./config/routes')(server)
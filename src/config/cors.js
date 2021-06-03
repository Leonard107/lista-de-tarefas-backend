module.exports = function(req, res, next){
    //Permite qualquer origem
    res.header('Access-Control-Allow-Origin', '*')
    //Os metodos que eu vou permitir acesso
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    //Para que a requisição seja bem sucedida por outras aplicações
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}
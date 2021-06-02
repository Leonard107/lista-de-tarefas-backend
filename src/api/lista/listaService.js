const Lista = require('./lista')

//Com isso eu já criei uma api rest e coloco aquilo que seja abilitado na minha 
Lista.methods(['get', 'post', 'put', 'delete'])

//Quando eu mandar uma atualização eu quero que retorne já o atualizado e 'new' faz isso
//Se não colocar o 'new:true' ele vai retorna os registros antigos e sem o runValidatores ele não vai rodar as validações, como
//deixar passar campos em branco.
Lista.updateOptions({new: true, runValidators: true})

module.exports = Lista
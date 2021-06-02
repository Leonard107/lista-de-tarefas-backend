const restful = require('node-restful');
//O node-restful ele cria como se fosse uma casca em cima do mongoose, dando pra gente uma api restful pronta
const mongoose = restful.mongoose

const todoSchema = new mongoose.Schema({
    description: {type: String, required: true},
    done: {type: Boolean, required: true, default: false},
    createdAt: {type: Date, default: Date.now}
})

module.exports = restful.model('lista', todoSchema)
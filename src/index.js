//importando bibliotecas
const express = require('express');
const routes = require('./routes')
//declarando variavel 'app' para usar as funçoes do express
const app = express();

//usando rotas do arquivo 'routes.js'
app.use(express.json());
app.use('/api', routes);

//middleware de criação de produto
//app.use(function (req, res, next) {
//  if(req.body.name && req.body.price && req.body.category){
//    next();
//  }
//  return res.status(400).json({ message: 'Erro ao validar campos'});
//})

//Declarando porta
app.listen(8080, () => {
    console.log("Servidor rodando em http://localhost:8080")
});
//importando apenas as funçoes 'Router' para criar rotas
const { Router } = require('express');
//declarando variavel 'route' para usar as funçoes do modulo 'Router' do express
const route = Router();
//importando arquivos
const categoryService = require('./categories/category_service');
const productService = require('./products/product_service');

//criando rotas
route.get('/usuarios', (req, res) => {
  return res.send('Usuários');
});

route.get('/produtos', (req, res) => {
  try {
    const products = productService.showProducts(req.query.price);
    return res.status(201).json(products);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

route.post('/produtos', (req, res) => {
  try {
    if(req.body.name && req.body.price && req.body.category){
      console.log(req.body);
      return res.status(201).json(req.body);
    }
    else{
      return res.status(400).json({ message: 'Erro ao validar campos'})
    }
  }catch{
    console.error(error.message);
    return res.status(500).json({ error: 'Erro ao cadastrar produto'})
  }
})

route.get('/categorias', (req, res) => {
  try {
    const categories = categoryService.showcategories();
    return res.status(201).json(categories);
  } catch(error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

//exportando rotas
module.exports = route;
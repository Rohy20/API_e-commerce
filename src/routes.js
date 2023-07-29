//importando apenas as funçoes 'Router' para criar rotas
const { Router } = require('express');
//declarando variavel 'route' para usar as funçoes do modulo 'Router' do express
const route = Router();
//importando arquivos
const categoryService = require('./categories/category_service');
const productService = require('./products/product_service');
//Conectando ao mysql
const connection = require('./db/connection');

//criando rotas
route.get('/usuarios', (req, res) => {
  return res.send('Usuários');
});

route.get('/produtos', async (req, res) => {
  try {
    const [result] = await connection.execute("select * from products");
    return res.status(201).json(result);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

route.post('/produtos', async (req, res) => {
  try {
    await connection.execute(`
      insert into products (name, price, description, category, image) values
      ('${req.body.name}', '${req.body.price}', '${req.body.description}','${req.body.category}', '${req.body.image}')
      `)
    if(req.body.name && req.body.price && req.body.category){
      console.log(req.body);
      return res.status(201).json(req.body);
    }
    else{
      return res.status(400).json({ message: 'Erro ao validar campos'})
    }
  }catch(error){
    console.error(error.message);
    return res.status(500).json({ error: 'Erro ao cadastrar produto'})
  }
});

route.delete('/produtos:id', async (req, res) => {
  try{
    const response = await productService.deletaProduto(req.param.id);
    console.log(response);
  } catch(error){
    console.error(error);
    return res.status(500).json({ error: 'Internal server error'});
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
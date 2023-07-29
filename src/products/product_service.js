//criando função de deleção de produtos
exports.deleteProduct = async (id) => {
  const result = await connection.execute(`
    delete from from produtos where id = ${id} 
  `);
  return result;
}

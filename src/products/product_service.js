exports.showProducts = function(param) {
     
  const products = [{
      name: 'iPhone 14',
      price: 9500,
      category: 'Smartphones'
    },{
      name: 'Samsung S23',
      price: 6500,
      category: 'Smartphones'
    },{
      name: 'monitor',
      price: 3000,
      category: 'Monitores',
      active: false,
    }];
    return products.filter((product) => {
      return product.price > param;
    });
  }
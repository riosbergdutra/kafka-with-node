const productService = require('../service/productservice');

class ProductController {
  async createProduct(req, res) {
    const { name, price } = req.body;
    await productService.createProduct(name, price);
  }

  async updateProduct(req, res) {
    const { productId, updatedName, updatedPrice } = req.body;
    await productService.updateProduct(productId, updatedName, updatedPrice);
    res.send('Produto atualizado com sucesso!');
  }

  async deleteProduct(req, res) {
    const { productId } = req.params;
    await productService.deleteProduct(productId);
    res.send('Produto excluído com sucesso!');
  }

  async readProduct(req, res) {
    const { productId } = req.params;
    const product = await productService.readProduct(productId);
    res.json(product);
  }
}

module.exports = new ProductController();

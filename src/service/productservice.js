const Product = require('../model/productmodel');
const { runProducer } = require('../../producer');

class ProductService {
  async createProduct(name, price) {
    const product = new Product({ name, price });
    await product.save();

    await runProducer('product-created', product.toObject());
  }

  async updateProduct(productId, updatedName, updatedPrice) {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name: updatedName, price: updatedPrice },
      { new: true }
    );

    await runProducer('product-updated', updatedProduct.toObject());
  }

  async deleteProduct(productId) {
    const deletedProduct = await Product.findByIdAndDelete(productId);

    await runProducer('product-deleted', deletedProduct ? deletedProduct.toObject() : { productId });
  }

  async readProduct(productId) {
    return Product.findById(productId);
  }
}

module.exports = new ProductService();

import Product from "../models/Products.js";
import ProductStat from "../models/ProductStats.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    const productStats = await Promise.all(
      products.map(async (product) => {
        const stat = new ProductStat.find({
          productId: product_id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

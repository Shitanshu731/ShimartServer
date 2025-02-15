import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      rating,
      countInStock,
      image,
      category,
      description,
      user,
    } = req.body;

    if (!name || !price || !countInStock || !category || !image) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const product = new Product({
      name,
      price,
      rating: rating || 0,
      countInStock,
      image,
      category,
      description,
      user,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

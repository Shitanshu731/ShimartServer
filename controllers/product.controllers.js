import cloudinary from "../config/cloudinary.js";
import Product from "../models/Product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, rating, stock, category, description } = req.body;

    // Check if required fields are present
    if (!name || !price || !stock || !category || !req.file) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Upload Image to Cloudinary
    const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path, {
      folder: "products",
    });

    const product = new Product({
      name,
      price,
      rating: rating || 0,
      stock,
      image: cloudinaryResponse.secure_url, // Save Cloudinary URL
      category,
      description,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

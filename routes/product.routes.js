import express from "express";
import { createProduct } from "../controllers/product.controllers.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post(
  "/createProduct",
  adminMiddleware,
  upload.single("image"),
  createProduct
);
export default router;

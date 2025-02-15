import express from "express";
import { createProduct } from "../controllers/product.controllers.js";
import { adminMiddleware } from "../lib/middleware.js";
const router = express.Router();

router.post("/createProduct", adminMiddleware, createProduct);
export default router;

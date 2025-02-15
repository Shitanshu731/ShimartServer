import express from "express";
import {
  register,
  login,
  getallUsers,
  getUserById,
} from "../controllers/user.controllers.js";
import { adminMiddleware } from "../lib/middleware.js";

const router = express.Router();

router.post("/register", register);
router.get("/", adminMiddleware, getallUsers);
router.get("/:id", getUserById);
router.post("/login", login);

export default router;

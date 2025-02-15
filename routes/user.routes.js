import express from "express";
import {
  register,
  login,
  getallUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../controllers/user.controllers.js";
import { adminMiddleware } from "../lib/middleware.js";

const router = express.Router();

router.post("/register", register);
router.get("/", adminMiddleware, getallUsers);
router.get("/:id", getUserById);
router.post("/login", login);
router.delete("/delete/:id", deleteUser);
router.put("/update/:id", updateUser);

export default router;

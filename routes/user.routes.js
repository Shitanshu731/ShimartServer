import express from "express";
import {
  register,
  login,
  getallUsers,
  getUserById,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", register);
router.get("/", getallUsers);
router.get("/:id", getUserById);
router.post("/login", login);

export default router;

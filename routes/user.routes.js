import express from "express";
import {
  register,
  login,
  getallUsers,
} from "../controllers/user.controllers.js";

const router = express.Router();

router.post("/register", register);
router.get("/", getallUsers);
router.post("/login", login);

export default router;

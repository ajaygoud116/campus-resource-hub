import express from "express";
import dotenv from "dotenv";
import {registerUser} from "../controllers/registeruser.js";
import { loginUser } from "../controllers/loginuser.js";

dotenv.config();
const router = express.Router();

// ✅ Register User
router.post("/register",registerUser);

// ✅ Login User
router.post("/login",loginUser);

export default router;

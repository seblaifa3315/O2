import express from "express";
import { register, login} from "../controllers/auth.js";


const router = express.Router();

//CREATE A USER
router.post("/register", register)

//SIGN IN
router.post("/login", login)

export default router;
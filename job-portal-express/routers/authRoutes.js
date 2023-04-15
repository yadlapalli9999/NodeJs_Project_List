import express  from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";
import userAuth from "../middleware/authMiddleware.js";
const router = express.Router();
router.post('/register', registerController)

router.post('/login',loginController)

router.post('/test',userAuth,testController)

export default router;
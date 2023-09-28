import express from "express";
import { 
  signUpController,
  signInController,
  updateProfileController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", signUpController);
router.post("/signin", signInController);
router.patch("/updateProfile/:userId", updateProfileController); 

export default router;
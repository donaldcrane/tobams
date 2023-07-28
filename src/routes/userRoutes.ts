import { Router as expRouter } from "express";
import {
  registerUser,
  getDashboard,
  loginUser,
 
} from "../controllers";
import { isAuthenticated  } from "../middlewares";

const router = expRouter();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.get("/dashboard", isAuthenticated, getDashboard);

export default router;

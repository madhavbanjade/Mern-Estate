import { Router } from "express";
import {
  google,
  signIn,
  signOut,
  signup,
  
} from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.route("/sign-up").post(signup);

authRouter.route("/sign-in").post(signIn);
authRouter.route("/google").post(google);
authRouter.route("/sign-out").get(signOut);

export default authRouter;

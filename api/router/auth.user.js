import { Router } from "express";
import { signIn, signup } from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.route("/sign-up").post(signup);
authRouter.route("/sign-in").post(signIn);

export default authRouter;

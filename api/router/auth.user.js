import { Router } from "express";
import { signup } from "../controllers/auth.controller.js";

const authRouter = Router();
authRouter.route("/sign-up").post(signup);

export default authRouter;

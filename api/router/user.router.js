import { Router } from "express";
import { userTest } from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.get("/test", userTest);

export default userRouter;

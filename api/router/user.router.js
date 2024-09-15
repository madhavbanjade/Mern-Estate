import { Router } from "express";
import {
  deleteUser,
  updateUser,
  userTest,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const userRouter = Router();
userRouter.route("/test").get(userTest);
userRouter.post("/update/:id", verifyToken, updateUser);
userRouter.delete("/delete/:id", verifyToken, deleteUser);

//first token is verified and the user is updated..

export default userRouter;

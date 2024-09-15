import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./router/user.router.js";
import authRouter from "./router/auth.user.js";
import cookieParser from "cookie-parser";

dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to mongoDB!");
  })
  .catch((error) => {
    console.log(error);
    // console.log("Something went wrong!!");
  });

const app = express();

//this line is responsible for giving the input data from postman or any is you do not do so y,ou caught an error called undefined..
app.use(express.json());
app.use(cookieParser());

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

//from here we can define our router the url must be from here inside "/"..
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//This is middleware where it throw an error if there any while hitting the api.
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
// import { errorHandler } from "../utils/errorhandler.js";

export const signup = async (req, res, next) => {
  const { userName, email, password } = req.body;

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
    // next(errorHandler(500, "error comes from the function"));
  }
};

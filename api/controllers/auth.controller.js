import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await new User({ username, email, password }).save();

    return res
      .status(201)
      .json({ message: `${newUser.username} user created successfully.` });
  } catch (err) {
    next(err);
  }
};

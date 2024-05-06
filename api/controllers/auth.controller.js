import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const newUser = await new User({ username, email, password }).save();

    return res
      .status(201)
      .json({ message: `${newUser.username} user created successfully.` });
  } catch (err) {
    res.status(500).json(err);
  }
};

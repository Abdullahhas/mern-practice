import { User } from "../models/users.js";
import { gentoken } from "../libs/jwtToken.js";

export const userReg = async (req, res) => {
  const { username, email, password } = req.body;

  const user = new User({ username, email, password });
  await user.save();
  const token = gentoken(user, res);
  res
    .status(201)
    .json({ message: "User registered successfully", user, token });
};


export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // Add password verification here if you haven't
  // const isMatch = await user.comparePassword(password);
  // if (!isMatch) return res.status(400).json(...)

  const token = gentoken(user, res);

  res.json({ 
    message: "Login successful", 
    user: { 
      id: user._id,
      username: user.username,
      email: user.email,
    }, 
    token 
  });
};


export const authCheck =async (req , res) => {
const user = await User.findById(req.user._id).select("-password");
  res.json(user);
}
 


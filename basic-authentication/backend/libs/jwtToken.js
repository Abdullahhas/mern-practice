import jwt  from "jsonwebtoken";
export const gentoken = (user, res) => {
  const secret = "mysecret"; // better from env var

  const token = jwt.sign(
    { userId: user._id },
    secret,
    { expiresIn: "1d" }
  );

  res.cookie("jwt", token, {
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  httpOnly: true,
  sameSite: 'strict', // Changed from boolean true to string 'strict'
  secure: process.env.NODE_ENV === 'production', // Enable in production
});
  return token;
};

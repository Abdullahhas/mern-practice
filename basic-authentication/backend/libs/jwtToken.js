import jwt from "jsonwebtoken";

export const gentoken = (user, res) => {
  const secret = "mysecret";

  const token = jwt.sign(
    {
      userId: user._id,
    },
    secret,
    {
      expiresIn: "1d",
    }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: false,
    sameSite: true,
  });

  return token;
};

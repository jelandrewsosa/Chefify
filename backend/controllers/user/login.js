import User from "../../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs';
import asyncHandler from "express-async-handler";

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({email})

  // checks if user is existing and the hashed password matched in the database
  if(user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json ({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateAccessToken(user._id)
    })
  } else {
    res.status(400).json({error: 'Invalid credentials'});
  }
});

// will sign a token by this id that is passed in with the secret access token used
function generateAccessToken(id) {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
}

export default login;

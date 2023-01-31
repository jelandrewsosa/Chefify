import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../../models/User.js";

const protect = asyncHandler(async (req, res, next) => {
  const {authorization} = req.headers;
  let token
  
  if(authorization && authorization.startsWith('Bearer')){
    try {
      // Get token from header and splits into an array
      token = req.headers.authorization.split(' ')[1]

      // verify token
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      // get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error);
      res.status(401).json({ error: "Not authorized" });
    }
  }

  if(!token) {
    res.status(401).json({ error: "Not authorized no token" });
  }
})

export default protect;
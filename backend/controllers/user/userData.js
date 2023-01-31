import asyncHandler from 'express-async-handler';
import User from '../../models/User.js';

const userData = asyncHandler(async (req, res) => {
  const {_id, firstName, lastName, email } = await User.findById(req.user.id)
  res.status(200).json({
    id: _id,
    firstName,
    lastName,
    email
  })
});

export default userData;
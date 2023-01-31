import asyncHandler from 'express-async-handler';
import Favorite from '../../models/Favorite.js';

const getAllUserFavoriteRecipes = asyncHandler(async (req, res) => {
  const { _id } = req.params;

  const response = await Favorite.find({user: _id})

  return res.status(200).json(response)
});

export default getAllUserFavoriteRecipes;
import expressAsyncHandler from "express-async-handler";
import Favorite from "../../models/Favorite.js";

const checkFavoriteRecipeDuplicate = expressAsyncHandler(async (req, res, next) => {

  const { user, uri } = req.body;

  const userFavoriteExists = await Favorite.findOne({ user, uri });

  if(userFavoriteExists) {
    return res.status(400).json({ error: "This recipe already exist in your favorites" });
  }

  next();
});

export default checkFavoriteRecipeDuplicate;

import Favorite from "../../models/Favorite.js";

const deleteRecipeFromFavorites = async (req, res) => {
  const { _id } = req.params;

  try {
    const post = await Favorite.deleteOne(
      { _id: _id },
    );
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default deleteRecipeFromFavorites;
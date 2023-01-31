import Favorite from "../../models/Favorite.js";

const addRecipeToFavorites = async (req, res) => {
  const {
    user,
    uri,
    label,
    image,
    dishType,
    mealType,
    ingredients,
    totalNutrients,
  } = req.body;

  try {
    // Save user favorite recipe to the database
    const favoriteData = await Favorite.create({
      user,
      uri,
      label,
      image,
      dishType,
      mealType,
      ingredients,
      totalNutrients,
    });

    return res.status(201).json(favoriteData);
  } catch (error) {
    // Throw an error message
    return res.status(400).json({ error: error.message });
  }
};

export default addRecipeToFavorites;

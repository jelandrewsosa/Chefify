import axios from "axios";
import process from "node:process";

const getRecipesByQuery = async (req, res) => {
  const response = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
  );

  res.json(response.data.hits);
};

export default getRecipesByQuery;


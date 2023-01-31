import { Router } from 'express';
import addRecipeToFavorites from '../controllers/favorite/addRecipeToFavorites.js';
import deleteRecipeFromFavorites from '../controllers/favorite/deleteRecipeFromFavorites.js';
import getAllUserFavoriteRecipes from '../controllers/favorite/getAllUserFavoriteRecipes.js'
import checkFavoriteRecipeDuplicate from '../middlewares/validation/checkFavoriteRecipeDuplicate.js';

const router = new Router();

router.post('/favorite', checkFavoriteRecipeDuplicate, addRecipeToFavorites)
router.get('/favorite/:_id', getAllUserFavoriteRecipes)
router.delete('/favorite/:_id', deleteRecipeFromFavorites)

export default router;
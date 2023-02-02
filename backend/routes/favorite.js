import { Router } from 'express';
import addRecipeToFavorites from '../controllers/favorite/addRecipeToFavorites.js';
import deleteRecipeFromFavorites from '../controllers/favorite/deleteRecipeFromFavorites.js';
import getAllUserFavoriteRecipes from '../controllers/favorite/getAllUserFavoriteRecipes.js'
import checkFavoriteRecipeDuplicate from '../middlewares/validation/checkFavoriteRecipeDuplicate.js';
import protect from '../middlewares/auth/authMiddleware.js';

const router = new Router();

router.post('/favorite', protect, checkFavoriteRecipeDuplicate, addRecipeToFavorites)
router.get('/favorite/:_id', protect, getAllUserFavoriteRecipes)
router.delete('/favorite/:_id', protect, deleteRecipeFromFavorites)

export default router;
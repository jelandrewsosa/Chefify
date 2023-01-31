import { Router } from 'express';
import getRecipesByQuery from '../controllers/recipes/getRecipesByQuery.js';
import queryValidation from '../middlewares/error/queryValidation.js';

const router = new Router();

router.get('/:query', queryValidation, getRecipesByQuery)

export default router;
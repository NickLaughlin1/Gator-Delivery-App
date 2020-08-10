import * as reviews from '../controllers/reviewsController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const reviewsRouter = express.Router();

reviewsRouter.post('/sub', reviews.create);
reviewsRouter.get('/', reviews.list);
export default reviewsRouter;
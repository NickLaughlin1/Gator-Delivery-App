import * as review from '../controllers/reviewsController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const reviewsRouter = express.Router();

reviewsRouter.post('/sub', review.create);
reviewsRouter.get('/', review.list);
export default reviewsRouter;
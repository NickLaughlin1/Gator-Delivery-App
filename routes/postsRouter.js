import * as posts from '../controllers/postsController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import {checkAuth} from '../authentication/authentication.js';
const postsRouter = express.Router();

postsRouter.post('/add', posts.create);
postsRouter.get('/:postId', posts.list);
postsRouter.put('/', posts.update);
postsRouter.get('/post/:postId', posts.read);
postsRouter.delete('/:postId', posts.remove);
export default postsRouter;

import * as posts from '../controllers/postsController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
import {checkAuth} from '../authentication/authentication.js';
const postsRouter = express.Router();

postsRouter.post('/add', checkAuth, posts.create);
postsRouter.get('/:postId', checkAuth, posts.list);
postsRouter.put('/', checkAuth, posts.update);
postsRouter.get('/post/:postId', posts.read);
postsRouter.delete('/:postId', checkAuth, posts.remove);
export default postsRouter;

import * as tasks from '../controllers/tasksController.js';
import express from 'express'; //refers to Express the middleware helper for Node.js
const tasksRouter = express.Router();

tasksRouter.post('/add', tasks.create);
tasksRouter.get('/:listingEmail', tasks.list);
tasksRouter.delete('/:taskid', tasks.remove);
tasksRouter.put('/:taskid', tasks.update);
tasksRouter.get('/',tasks.fulllist);

export default tasksRouter;
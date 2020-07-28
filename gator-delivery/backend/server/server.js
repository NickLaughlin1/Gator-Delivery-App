import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js';
import tasksRouter from './routes/tasksRouter.js';
import postsRouter from './routes/postsRouter.js';

//connect to database
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});


//initialize app
const app = express();

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
app.use(function(req, res, next) {
   //res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
   //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Credentials", "true");
	res.header("Access-Control-Max-Age", "1800");
	res.header("Access-Control-Allow-Headers", "content-type");
	res.header("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
   next();
 });

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
app.use('/', express.static('./../../client'));

app.use('/tasks', tasksRouter);

app.use('/posts', postsRouter);
/* The next three middleware are important to the API that we are building */

/* Request Handler for route /api/listings
   TODO: Update the code to meet the required format - app.use('/api/listings', appropriateMiddleWare)
   use the listings router middleware for requests to the api
   check the variables list above
*/
//app.use('/api/listings/');


/* Request Handler for coordinates
   This is a server wrapper around Open Cage Data Geocoding API to get latitude + longitude coordinates from address */
/*app.post('/api/coordinates', getCoordinates, (req, res) => {
    res.send(req.results);
});*/


/* Request handler for all other routes
   Sends a response (res) to go to the homepage for all routes not specified */
app.all('/*', (req, res) => {
   res.sendFile(path.resolve('client/index.html'));
});

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));


import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import tasksRouter from './routes/tasksRouter.js';
import postsRouter from './routes/postsRouter.js';
import userRouter from './routes/userRouter.js';
import reviewsRouter from './routes/reviewsRouter.js';

const PORT = process.env.PORT || 5000;
const URI = process.env.DB_URI || "mongodb+srv://user:test@cen3031-summer-2020-jqavu.mongodb.net/<dbname>?retryWrites=true&w=majority";

//connect to database
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

//initialize app
const app = express();

//enable request logging for development debugging
app.use(morgan("dev"));

//body parsing middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
app.use(function (req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Max-Age", "1800");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
  next();
});

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
app.use("/", express.static("./../../client"));

app.use("/tasks", tasksRouter);
//app.use('/', express.static('.'));

//app.use("/posts", postsRouter);

app.use('/posts', postsRouter);

app.use('/users', userRouter);

app.use('/reviews', reviewsRouter);

/*app.all('/*', (req, res) => {
   res.sendFile(path.resolve('client/index.html'));
});*/

let __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
   app.use('/', express.static('client/build'));

   app.get('/*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
   
}

app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));

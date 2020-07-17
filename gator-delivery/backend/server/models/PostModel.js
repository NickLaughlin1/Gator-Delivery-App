import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  text: {type: String, required: true}
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('posts', postSchema);
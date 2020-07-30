import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  message: {type: String, required: true},
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('reviews', reviewSchema);
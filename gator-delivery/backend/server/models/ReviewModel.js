import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  mes: {type: String, required: true},
  rate: {type: Number, min: 1, max: 5},
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('reviews', reviewSchema);
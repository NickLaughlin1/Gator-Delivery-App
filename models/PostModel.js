import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  text: {type: String, require: true},
  date: {type: Date, require: true},
  user: {type: String},
  replyTo: {type: mongoose.Schema.Types.ObjectId},
  repliable: {type: Boolean, require: true},
  edited: {type: Boolean, require: true},
  editDate: {type: Date, require: false}
});

/* Use your schema to instantiate a Mongoose model
Export the model to make it avaiable to other parts of your Node application */
//Check out - https://mongoosejs.com/docs/guide.html#models
export default mongoose.model('posts', postSchema);
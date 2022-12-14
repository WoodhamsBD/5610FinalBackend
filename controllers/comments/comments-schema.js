import mongoose, { mongo } from "mongoose";

const commentSchema = mongoose.Schema({
  comment: String,
  jokeID: String,
  author: {
    type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'
  }
} , { collection: 'comments'})

export default commentSchema;
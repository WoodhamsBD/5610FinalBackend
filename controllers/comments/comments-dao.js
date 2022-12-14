import commentModel from "./comments-model.js";

export const createComment = async (comment) => 
  // console.log("DAO" + comment)
  commentModel.create(comment)


export const findCommentByJokeID = async (jokeID) => 
  commentModel.find({jokeID}).populate('author').exec()


export const findCOmmentByAuthor = async (author) => 
  commentModel.find({author})

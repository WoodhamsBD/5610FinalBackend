import * as dao from "./comments-dao.js"

const CommentController = (app) => {
  const createComment = async (req,res) => {
    const comment = req.body
    console.log("Comment: "  + comment.comment)
    // console.log("Sesssion: " + req.session)
    const currentUser = req.session['currentUser']
    // console.log(currentUser)
    comment.author = currentUser._id
    const actualComment = await dao.createComment(comment)

    // console.log(actualComment)

    res.json(actualComment)
  }

  const findCommentByJokeID = async (req, res) => {
    // console.log("Here")
    const jokeID = req.params.jokeID
    const comments = await dao.findCommentByJokeID(jokeID)
    // console.log(comments)
    res.json(comments)
  }

  const findCOmmentByAuthor = async (req, res) => {
    const author = req.params.author
    const comments = await dao.findCOmmentByAuthor(author)
    res.json(comments)
  }
  

  app.post('/api/comments' ,createComment)
  app.get('/api/jokes/:jokeID/comments', findCommentByJokeID)
  app.get('/api/users/:author/comments', findCOmmentByAuthor)
}

export default CommentController
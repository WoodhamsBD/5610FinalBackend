import mongoose from "mongoose";

import commentSchema from "./comments-schema.js";

const commentModel = mongoose.model('CommentModel', commentSchema)

export default commentModel;
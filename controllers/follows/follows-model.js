import mongoose from "mongoose";
import followsSchema from "./follows-schema";

const followModel = mongoose.model('FollowModel', followsSchema)

export default followModel
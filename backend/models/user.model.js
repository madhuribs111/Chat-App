import {Schema, mongoose} from "mongoose"

const userSchema = new Schema({
    name: {
        type: String,
    },

    username:{
        type: String,

    },
    password:{
        type: String,

    },
    gender: {
        type: String,
        enum:["Female", "Male", "Bisexual", "Trans", "Others"],
    },

    profilePic:{
        type:String
    }
}, {timestamps: true})
const User = mongoose.model("User", userSchema);
export default User;

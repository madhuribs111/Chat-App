import User from "../models/user.model.js"

export const getUserForSidebar = async(req,res)=>{
    try{
const loggedInUser = req.user._id
const filteredUsers = await User.find({_id: {$ne: loggedInUser }}).select("-password")
  res.status(200).json(filteredUsers)

}catch(err){
        console.log("error in getUserForSidebar")
        return res.status(500).json({message: err.message})
    }
}
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:true,
    },
     name: {
        type:String,
        required:true,
        unique:true,
    },
    password: {
        type:String,
        required:true,
    },
   avatar:{
    type:String,
    required:false,
    default :"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
   }
});


const User = mongoose.model("User", UserSchema);
export default User;
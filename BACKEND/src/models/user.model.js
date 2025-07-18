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
   default :function() {
    return getGravatarUrl(this.email);
   }
   }
});

function getGravatarUrl(email) {
    const hash = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
    return `https://www.gravatar.com/avatar/${hash}`;
}

const User = mongoose.model("User", UserSchema);
export default User;
import mongoose from "mongoose";
import bcrypt from "bcrypt";

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
        select:false,
    },
   avatar:{
    type:String,
    required:false,
    default :"https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
   }
});

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.set('toJSON',{
    transform: (doc, ret) => {
        delete ret.password;
        delete ret.__v;
        return ret;
    }
})

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

const User = mongoose.model("User", UserSchema);
export default User;
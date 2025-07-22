import { signToken } from "../utils/helper.js";
import { findUserByEmail , createUser } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";


export const registerUser = async (email , name , password) => {
    const user = await findUserByEmail(email);
    if(user) throw new ConflictError("User already exists");

    const newUser = await createUser(email, name, password);
    const token = await signToken({id:newUser._id});
    return token;
}

export const loginUser = async (email , password) => {
    const user = await findUserByEmail(email);

    if(!user || user.password !== password) throw new Error("Invalid credentials");

    const token =signToken({id:user._id});
    return {token, user};
}
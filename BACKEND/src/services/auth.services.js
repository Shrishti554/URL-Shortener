import { signToken } from "../utils/helper.js";
import { findUserByEmail, createUser, findUserByEmailAndPassword } from "../dao/user.dao.js";
import { ConflictError } from "../utils/errorHandler.js";


export const registerUser = async (email , name , password) => {
    const user = await findUserByEmail(email);
    if(user) throw new ConflictError("User already exists");

    const newUser = await createUser(email, name, password);
    const token = await signToken({id:newUser._id});
    return { token, user: newUser };
}

export const loginUser = async (email , password) => {
    const user = await findUserByEmailAndPassword(email);
    if(!user) throw new Error("Invalid credentials");

    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid) throw new Error("Invalid credentials");

    const token = signToken({id:user._id});
    return { token, user };
}
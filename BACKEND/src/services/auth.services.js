
import jsonwebtoken from "jsonwebtoken";
import User from "../models/user.model";
import { findUserByEmail , createUser } from "../dao/user.dao";
import { ConflictError } from "../utils/errorHandler";


export const registerUser = async (email , name , password) => {
    const user = await findUserByEmail({email});
    if(user) throw new ConflictError("User already exists");

    const newUser = await createUser(email, name, password);
    const token = await signToken({id:newUser._id});
    return token;
}
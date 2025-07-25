import User from "../models/user.model.js";

export const findUserByEmail = async (email) => {
    return await User.findOne({email});
}

export const findUserByEmailAndPassword = async (email) => {
    return await User.findOne({email}).select("+password");
}

export const findUserById = async (id) => {
    return await User.findById(id);
}
export const createUser = async (email, name, password) => {
    const newUser = new User({email, name, password});
    await newUser.save();
    return newUser;
}
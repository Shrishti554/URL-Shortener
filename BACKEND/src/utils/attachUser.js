
import { verifyToken } from "./helper.js";
import { findUserById } from "../dao/user.dao.js";

export const attachUser = (req, res, next) => {
const token = req.cookies.accessToken;
if(!token) return next();
try {
    const decoded =  verifyToken(token);
    const user =  findUserById(decoded);
    if(!user) return next();
    req.user = user;
    next();
} catch (error) {
    return next();
}
}
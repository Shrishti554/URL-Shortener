import { nanoid } from "nanoid";
import { cookieOptions } from "../config/config";
export const generateNanoId = (length = 8) => {
    return nanoid(length);
};

export const signToken =(payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, cookieOptions);
};

export const verifyToken = (token) => {
    return jsonwebtoken.verify(token, process.env.JWT_SECRET);
};
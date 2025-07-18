import wrapAsync from "../utils/tryCatchWrapper";
import { registerUser } from "../services/auth.services.js";


export const register_user = wrapAsync(async (req, res) => {
    const { email, name, password } = req.body;
    const token = await registerUser(email, name, password);
    res.status(201).json({ token });
  });
  
  export const login_user = wrapAsync(async (req, res) => {
    res.send("Login");
  });
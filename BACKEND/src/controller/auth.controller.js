import wrapAsync from "../utils/tryCatchWrapper.js";
import { registerUser , loginUser } from "../services/auth.services.js";


export const register_user = wrapAsync(async (req, res) => {
    const { email, name, password } = req.body;
    const { token , user } = await registerUser(email, name, password);
    res.status(201).json({ token, user, message: "Register Successful" });
  });
  
export const login_user = wrapAsync(async (req, res) => {
   const { email, password } = req.body;
   const { token, user } = await loginUser(email, password);
   res.status(200).json({ token, user, message: "Login Successful" });
  });

  // export const creatCustomShortUrl = wrapAsync(async (req, res) => {
  //   const { url, slug } = req.body;
  //   const shortUrl = await createShortUrlWithUser(url, req.user._id, customUrl);
  //   res.status(200).json({shortUrl:process.env.APP_URL + shortUrl});
  //  });
  
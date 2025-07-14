import { generatedNanoId } from "../utils/helper.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js";
 export const createShortUrl = async(req,res)=>{
    const {url} = req.body
   const shortUrl = cresteShortUrlService(url);
   res.send(process.env.APP_URL + shortUrl)

 }
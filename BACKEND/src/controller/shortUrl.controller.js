import { generatedNanoId } from "../utils/helper.js"
import { cresteShortUrlService } from "../utlis/helper.js"
 export const createShortUrl = async(req,res)=>{
    const {url} = req.body
   const shortUrl = cresteShortUrlService(url);
   res.send(process.env.APP_URL + shortUrl)

 }
// import { generatedNanoId } from "../utils/helper.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js";
import { getShortUrl } from "../dao/shortUrl.js";
import wrapAsync from "../utils/tryCatchWrapper.js";
 export const createShortUrl =  wrapAsync(async (req, res ,next) => {
    
    const { url } = req.body;
    const shortUrl = await createShortUrlWithoutUser(url); // ✅ await added
    res.status(200).json({shortUrl:process.env.APP_URL + shortUrl});
   });

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
   
    const { id } = req.params;
    const url = await getShortUrl(id);
       if(!url)throw new Error("Short URL not found")
           res.redirect(url.full_url)
    });

 export default createShortUrl;
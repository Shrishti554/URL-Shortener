// import { generatedNanoId } from "../utils/helper.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js";
import { getShortUrl } from "../dao/shortUrl.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


 export const createShortUrl =  wrapAsync(async (req, res ,next) => {
    
    const { url } = req.body;
    if(req,user){
    const shortUrl = await createShortUrlWithUser(url,req.user._id);
    }else{
        const shortUrl = await createShortUrlWithUser(url);
    }
    res.status(200).json({shortUrl:process.env.APP_URL + shortUrl});
   });

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
   
    const { id } = req.params;
    const url = await getShortUrl(id);
       if(!url)throw new Error("Short URL not found")
           res.redirect(url.full_url)
    });

export const creatCustomShortUrl = wrapAsync(async (req, res) => {
    const { url, slug } = req.body;
    const shortUrl = await createShortUrlWithoutUser(url, customUrl);
    res.status(200).json({shortUrl:process.env.APP_URL + shortUrl});
   });

 export default createShortUrl;
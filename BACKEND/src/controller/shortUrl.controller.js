// import { generatedNanoId } from "../utils/helper.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js";
import { getShortUrl } from "../dao/shortUrl.js";
import wrapAsync from "../utils/tryCatchWrapper.js";


 export const createShortUrl =  wrapAsync(async (req, res ,next) => {
    
    const data = req.body;
    let shortUrl;
    if(req,user){
     shortUrl = await createShortUrlWithUser(data.url,req.user._id, data.slug);
    }else{
       shortUrl = await createShortUrlWithUser(data.url);
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
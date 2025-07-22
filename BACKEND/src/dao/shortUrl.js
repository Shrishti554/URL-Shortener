import UrlModel from "../models/shortUrlModel.js";
import { ConflictError } from "../utils/errorHandler.js";


export const saveShortUrl = async (shortUrl, longUrl, userId) => {
  try{
    const newUrl = new UrlModel({
    full_url: longUrl,
    short_url: shortUrl,
  });

  if (userId) {
    newUrl.user = userId;
  }

  await newUrl.save(); 
}catch(err){
   if(err.code == 11000){
   throw new ConflictError("Short URL already exits ");
   }
   throw new Error(err)
}
};

export const getShortUrl = async (shortUrl) => {
  return await UrlModel.findOneAndUpdate({ short_url: shortUrl },{$inc:{clicks:1}});
};

export const getCustomShortUrl = async (slug) => {
  return await urlSchema.findOne({ short_url: slug });
};
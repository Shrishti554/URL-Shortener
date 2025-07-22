import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/shortUrl.js";
import { getCustomShortUrl } from "../dao/shortUrl.js";


export const createShortUrlWithoutUser = async (url) => {
  const shortUrl = generateNanoId(7);
  if(!shortUrl) throw new Error ("Short URL not")
  await saveShortUrl(shortUrl, url); 
  return shortUrl;
};

export const createShortUrlWithUser = async (url, userId, slug=null) => {
  const shortUrl = slug || generateNanoId(7);
  const exists = await getCustomShortUrl(slug);
  if(exists) throw new Error("CustomUrl already exists");

  await saveShortUrl(shortUrl, url, userId); 
  return shortUrl;
};


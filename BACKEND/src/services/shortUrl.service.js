import { generateNanoId } from "../utils/helper.js";
import { saveShortUrl } from "../dao/shortUrl.js";
import urlSchema from "../models/shorturlModels.js"; // adjust the path if needed

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(shortUrl, url);
    return shortUrl;
};

export const createShortUrlWithUser = async (url, userId) => {
    const shortUrl = await generateNanoId(7);
    await saveShortUrl(url, shortUrl, userId);
    return shortUrl;
};

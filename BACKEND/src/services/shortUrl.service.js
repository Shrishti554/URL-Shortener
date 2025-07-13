import { generatedNanoId } from "../utils/helper.js"
export const cresteShortUrlService = (url) => {
   const shortUrl = generatedNanoIdanoid(7)
    const newUrl =new urlSchema({
        full_url:url,
        short_url:shortUrl,
    })
    newUrl.save()
    return shortUrl;
}
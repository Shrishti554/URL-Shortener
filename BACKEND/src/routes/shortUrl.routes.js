import express from "express";
import { createShortUrl ,  creatCustomShortUrl } from '../controller/shortUrl.controller.js';
const router = express.Router();

router.post("/",createShortUrl);
router.post("/",creatCustomShortUrl);



export default router;
import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import shortUrl from "./src/routes/shortUrl.routes.js";
import auth from "./src/routes/auth.routes.js";
import connectDB from "./src/config/mongo.config.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js"
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

//POST-Create short url
app.use("/api/auth", auth)
app.use("/api/create", shortUrl)

app.get("/:id",redirectFromShortUrl)

app.use(errorHandler)

app.listen(3000 ,()=>{
    connectDB()
    console.log("server is runnning on http://localhost:3000")
})

//GET-Redircetion

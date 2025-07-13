import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
dotenv.config("./.env");
import shortUrl from "BACKEND/src/models/shortUrlModels.js";
import urlSchema from "./BACKEND/src/models/shortUrlModels.js"

import connectDB from "./src/config/mongo.config.js"

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//POST-Create short url
app.post("/api/create", shortUrl)

app.get("/:id",async(req,res)=>{
    const {id} =req.params
    const url = await urlSchema.findOne({short_url:shortUrl})
    if(url){
        res.redirect(url.full_url)
    }else{
        res.status(404).send("Not Found")
    }
})


app.listen(3000 ,()=>{
    connectDB()
    console.log("server is runnning on http://localhost:3000")
})

//GET-Redircetion

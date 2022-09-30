import express from "express";
import dotenv from "dotenv"
import Connection from "./DB/db.js";
import cors from "cors"
import bodyParser from "body-parser";
import Routes from "./Routes.js";
import multer from "multer";
import path from "path"
import {fileURLToPath} from "url"
// import { dirname } from "path";


const port = process.env.PORT || 4000;
const app = express();
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))





//DB connection 
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);




///server setting
app.listen(port,()=>{
    console.log("hello All") 
})


app.use("/",Routes)

////deployment///
const __dirname = path.resolve();
if(process.env.NODE_ENV ==="production"){

    app.use(express.static(path.join(__dirname,"../client/build")));

    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"../","client","build","index.html"))
    })

}else{
    app.listen(port,()=>{
        console.log("hello All") 
    })
}


//multer storage

const Storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})


const upload = multer({storage:Storage}).single('testImage')
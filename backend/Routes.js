import express, { Router } from "express";
import {addVendor,getVendors,addData,getResource} from "./DB/Controller.js";
import multer from "multer";
// import { getResource } from "../client/src/api.js";

const upload = multer();
const route = express.Router();

route.post("/vendor",addVendor)
route.get("/getvendor",getVendors)
route.post("/resource",upload.single("file"),addData)
route.get("/allresource",getResource);
export default route;
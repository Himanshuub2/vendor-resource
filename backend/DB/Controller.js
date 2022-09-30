import mongoose from "mongoose";
import {vendormodel,resourcemodel} from "./Schema.js";


export const addVendor = async(req,res)=>{
    const vendor = req.body;
    const newvendor = new vendormodel(vendor)
    try{
        await newvendor.save();
        res.status(201).json(newvendor)
    }catch(err){
            res.status(409).json(err);
    }
}

export const getVendors = async(req,res)=>{
    try{
        const vendors = await vendormodel.find({})
        res.status(201).json(vendors);
    }catch(err){
        res.status(409).json(err);

    }
}


export const addData = async(req,res)=>{
    const resourceRes = req.body;
    const newResourceRes = new resourcemodel(resourceRes);
    try{
        await newResourceRes.save();
        res.status(201).json(newResourceRes);
    }catch(err){
        res.status(409).json(err);
    }
}

export const getResource = async(req,res)=>{
    try{

        const allresource = await resourcemodel.find({})
        res.status(201).json(allresource)
    }catch(err){
        res.status(409).json(err);
}
}
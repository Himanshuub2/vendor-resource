import mongoose from "mongoose";

const vendorSchema = mongoose.Schema({
    name:{type:String,required:true}
})


export const vendormodel = mongoose.model("vendor",vendorSchema);

const resourceSchema = mongoose.Schema({
    name:{type:String},
 
    
    technology:{type:String},
    vendor:{
        type:String
    },
})


export const resourcemodel = mongoose.model("resource",resourceSchema);
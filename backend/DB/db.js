import mongoose from "mongoose";

const Connection = async(username,password)=>{

    const url = `mongodb+srv://${username}:${password}@cluster0.thkmk.mongodb.net/?retryWrites=true&w=majority`

    try{
            await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
            console.log("Db connected successfully")
    }catch(err){
        console.log(err);
    }
}


export default Connection;
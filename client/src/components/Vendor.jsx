import {useState} from "react";
import { addVendor } from "../api";
import {Box,Typography,styled,Button,Input,Typorgraphy, TextField} from "@mui/material"


const initial  = {
    "name":"",
}
const Vendor = ()=>{

    const [vendor,setVendor] = useState(initial)

    const Container = styled(Box)`
              height:100vh;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;

    `
    const CustomBtn = styled(Button)`
   margin-top:20px; 
   background:black;
    `
    const handleChanges = (e)=>{
        
        setVendor({...vendor,[e.target.name]:e.target.value});
        
    }

    

    const handleClicks = async()=>{
       await addVendor(vendor)
    }
    return (
        <div  style ={{
            display:"flex",
            flexDirection:"column",
            height:"100vh",
            justifyContent:"center",
            alignItems:"center"}}>
        {/* <Typography  variant="h2" style = {{color:"#0000B9"}}>Vendors</Typography> */}
        
            <Typography variant = "h2"style = {{color:"#0000B9"}}>Vendor Name</Typography>
            <input  onChange = {handleChanges} name = "name"/>
            < CustomBtn onClick = {handleClicks} variant="contained">Submit</CustomBtn>
        {/* </Container> */}
        </div>
    )
}

export default Vendor;
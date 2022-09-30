import {useState,useEffect} from "react";
import { getVendor } from "../api";
import axios from "axios";
import {Box,Button,FormControl,Input,styled,TextField, Typography} from "@mui/material";
import "./Resource.css";



const Resource = ()=>{
    const [file,setFile ] = useState(null)
    const [name,setName] = useState("");
  
    const [vendordropdown,setVendorDropDown] = useState("")
    const [vendors,setVendors] = useState([])

const [checkbox,setCheckBox] = useState([])

const Container = styled (Box)`

    display:flex;
    height:100vh;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    

`
const Text = styled (Typography)`

    color:#0000B9;
    font-size:20px;
`



    useEffect(()=>{
         const receiveVendor = async()=>{
    const res =await getVendor();
     
    setVendors(res.data)
   }   
   receiveVendor();
    },[])


    const onFileClick = ()=>{
        const docFile = document.getElementById("files").files[0];
        setFile(docFile);
    }

    const handleChange = (e)=>{
        if(e.target.checked === true){
            setCheckBox([...checkbox,e.target.value])
        }else{
            setCheckBox(checkbox.filter(item=>item !==e.target.value))
        }
    }
  
   

    const sendData = async ()=>{
    const data = new FormData();
    data.append("name",name);
    
    data.append("file",file);
    data.append("technology",checkbox)
    data.append("vendor",vendordropdown);
    
    // console.log(data);
    // console.log(vendordropdown);
   await  axios.post("http://localhost:4000/resource",data).then(res=>console.log(res)).catch(err=>console.log(err))
   }
   

//    console.log(resource);
   
   
    return(
       
        <div style ={{
            display:"flex",
            flexDirection:"column",
            height:"100vh",
            justifyContent:"center",
            alignItems:"center"

        }}>
        <Typography variant = "h2" style ={{color:"#0000B9"}}>Resource</Typography>
        
            <FormControl>
            <form action = "#">
                <Text>Full Name</Text>
               <TextField className = "forms" label = "Full Name" type = "text" onChange = {(e)=>setName(e.target.value)}/><br/>
               <Text>Resume</Text>
                 <TextField className = "forms"type = "file" onChange = {()=>onFileClick() } id = "files" /><br/>

                <Text>Technology</Text>
                   <TextField className="check" type = "checkbox" onChange = {handleChange} value = "Reactjs"/><label className = "forms1">ReactJs</label>
                    <TextField className="check"type = "checkbox"  onChange = {handleChange} value = "NodeJS" /><label className = "forms1">NodeJS</label>
                    <TextField className="check"type = "checkbox" onChange = {handleChange}value = "JavaScript"/><label className = "forms1">JavaScript</label>
                    <TextField className="check"type = "checkbox"  onChange = {handleChange}value = "Redux" /><label className = "forms1">Redux</label><br/>

                <Text style = {{marginTop:"20px"}}>Vendor</Text>
                <select value ={vendordropdown} style  = {{fontSize:"16px",width:"200px"}} onChange={(e)=>setVendorDropDown(e.target.value)}>
                   
               {
                vendors.map(item=>(
                    <>
                    <option className = "forms"value = {item.name} key = {item.name}>{item.name}</option>
                   
                    </>
                ))
               } 
                </select><br/>
                <Button variant = "contained" style = {{background:"black",marginTop:"20px"}} className = "forms"onClick = {sendData}>Submit</Button>
                </form>
           </FormControl> 
        </div>
       
    )   
}
export default Resource;
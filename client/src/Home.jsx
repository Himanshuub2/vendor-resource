
import {Link} from "react-router-dom";


const Home = ()=>{
    return(
        <div >
            <nav style = {{
                borderBottom:"2px solid grey",
                boxShadow:"0px 5px rgba(0,0,0,0.2)",
                background:"black",
                height:"60px",
                paddingTop:"20px"
            }}>
           
               <ul
                style  = {{
                    listStyle:"none",
                    display:"flex",
                    justifyContent:"space-around",
                  
                    alignItems:"center",   
                    fontSize:"25px"
                }} 
               >
                    <Link to = "/vendor"><li style = {{color:"white"}}>Vendor </li></Link>
                    <Link to = "/resource"><li style = {{color:"white"}}>Resource</li></Link>
                    <Link to = "/allusers"><li style = {{color:"white"}}>Dashboard</li></Link>

                </ul> 
            </nav>
            
        </div>
    )
}
export default Home;
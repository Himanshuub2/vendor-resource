import {Table,TableHead,TableRow,TableBody,TableCell, TableContainer, Typography} from "@mui/material"
import {useEffect,useState} from 'react'
import { getResource } from "../api"

const Dashboard = ()=>{

    const [dashData,setDashData] = useState([])
    useEffect(()=>{
        const DashboardData = async()=>{
            const results = await getResource();
            console.log(results);
            setDashData(results.data);

        }
        DashboardData();
    },[])

    return(
        <div>
            <Typography variant = "h2" style ={{color:"#0000B9"}}>DashBoard</Typography>
            <TableContainer >
            <Table >
                <TableHead >
                    <TableRow >
                        <TableCell style= {{fontSize:"20px",fontWeight:"bold"}}>Name</TableCell>
                        <TableCell style= {{fontSize:"20px",fontWeight:"bold"}}>Technology</TableCell>
                        <TableCell style= {{fontSize:"20px",fontWeight:"bold"}}>Vendor</TableCell>
                        <TableCell style= {{fontSize:"20px",fontWeight:"bold"}}>Resume</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {
                    dashData.map(item=>(
                        <TableRow>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.technology}</TableCell>
                            <TableCell>{item.vendor}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    ))     
            }
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    )
}
export default Dashboard;
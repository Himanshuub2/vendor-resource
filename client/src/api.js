import axios from "axios"


const backendUrl = "http://localhost:4000"

export const addVendor = async(vendor)=>{
    await axios.post (`${backendUrl}/vendor`,vendor)
}



export const getVendor = async() =>{
    return await axios.get(`${backendUrl}/getvendor`)
}


export const getResource = async()=>{
    return await axios.get(`${backendUrl}/allresource`)
}
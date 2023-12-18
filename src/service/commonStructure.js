import axios from "axios";

//application/json is a default header if there is no header is present

export const commonStructure=async(method,url,body,header)=>{
    let config={
        method,
        url,
        headers:header?header:"application/json",
        data:body
    }
     return await axios(config).then(response=>{
        return(response)
    }).catch(response=>{
        return response
    })
}
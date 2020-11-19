import axios from "axios"

export const login = (userData)=>{
    //thunk
    const url = "/api/login"
    return dispatch=>{
        return axios.post(url,userData)
    }
}
 

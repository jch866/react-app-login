import axios from "axios"

export const userSignupRequest = (userData)=>{
    //thunk
    const url = "/api/users"
    return dispatch=>{
        return axios.post(url,userData)
    }

}
export const checkUser = (value)=>{
    //thunk
    const url = `/api/users/${value}`;
    return dispatch=>{
        return axios.get(url)
    }

}


 
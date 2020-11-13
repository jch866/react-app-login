import axios from "axios"

export const userSignupRequest = (userData)=>{
    //thunk
    const url = "/api/users"
    return dispatch=>{
        return axios.post(url,userData)
    }

}

 
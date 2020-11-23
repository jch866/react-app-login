import axios from "axios"
import setAuthToken from "./../utils/setAuthToken"
export const login = (userData)=>{
    //thunk
    const url = "/api/login"
    return dispatch=>{
        return axios.post(url,userData).then(data=>{
            const token = data.data.token;
            localStorage.setItem('jwtToken',token)
            setAuthToken(token)// 写入token到header
            return data;
        })
    }
}
 

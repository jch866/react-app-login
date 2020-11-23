import axios from "axios"
import setAuthToken from "./../utils/setAuthToken"
import {SET_CURRENT_USER} from "./../consts"
import jwtDecode from "jwt-decode"
export const setCurrentUser = (user)=>{
    return {
        type:SET_CURRENT_USER,
        user
    }
}
export const login = (userData)=>{
    //thunk
    const url = "/api/login"
    return dispatch=>{
        return axios.post(url,userData).then(data=>{
            const token = data.data.token;
            localStorage.setItem('jwtToken',token)
            setAuthToken(token)// 写入token到header
            dispatch(setCurrentUser(jwtDecode(token)))
            return data;
        })
    }
}
 

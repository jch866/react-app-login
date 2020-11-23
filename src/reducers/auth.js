
import {SET_CURRENT_USER} from "./../consts"
import isEmpty from "lodash/isEmpty"
const initialState = {
    isLogined:false,
    user:{}
}
const auth =(state=initialState,action)=>{
    switch(action.type){
        case SET_CURRENT_USER: 
        return {
            isLogined:!isEmpty(action.user),
            user:action.user
        }
        default:
            return state;
    }
}
export default auth;
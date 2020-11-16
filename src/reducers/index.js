import {combineReducers} from "redux"
import auth from "./auth";
import flashMsg from "./flashMsg";
//个人理解 ： reducer就是来更新和返回 与store有关的数据 
const rootReducer = combineReducers({
    auth,flashMsg
})
export default rootReducer;
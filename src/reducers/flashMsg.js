import { bindActionCreators } from 'redux';
import {ADD_FLASH_MSG,DEL_FLASH_MSG} from './../consts';
import shortid from "shortid"
const state1 = [{id:1,type:"success",text:'测试数据'},{id:2,type:"danger",text:'测试数据'}]
const flashMsg = (state=state1,action={})=>{
    switch(action.type){
        case ADD_FLASH_MSG:
        return [
            ...state,
            {
                id:shortid.generate(), //生成一个随机id
                type:action.message.type,
                text:`${action.message.text}-${shortid.generate()}`,
            }
        ]
        case DEL_FLASH_MSG:
   
            const index  = state.findIndex(item=>item.id === action.id);
            // let newstate = [];
            // if(index>=0){
            //    return [...state.slice(0,index),...state.slice(index+1)]
            // }
            //由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
            // [...state].splice(index,1)  splice方法不行 不能直接操作state;
            let newstate = [...state];
            newstate.splice(index,1);
            return newstate;
        default:
            return state;
    }
}

export default flashMsg;
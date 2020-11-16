import {ADD_FLASH_MSG,DEL_FLASH_MSG} from './../consts'
/**
 * massage:{type,text}
 */
export const addFlashMsg = (message)=>{
    return {
        type:ADD_FLASH_MSG,
        message,
    }
}
export const delFlashMsg = (id)=>{
    return {
        type:DEL_FLASH_MSG,
        id,
    }
}
import React from "react";
import {Button} from "antd" 
import { CloseOutlined  } from "@ant-design/icons" 
class FlashMsg extends React.Component{
    delhandle=()=>{
        //key 一般不能用作props
        let {delFlashMsg,msg} = this.props;
        console.log(`id:${msg.id}`)
        delFlashMsg(msg.id);   
    }
    render(){
        const {type,text} = this.props.msg;
         return (
            // <div  className={[type==="success"?"alert-success":"alert-danger",'alert-lists'].join(' ')}>
            <div  className={`${type==="success"?"alert-success":"alert-danger"} alert-lists`}>
                <span style={{marginRight:'30px'}}>{text}</span>
                {/* <Button type='primary' shape="circle" onClick={this.delhandle}>删除</Button> */}

                <CloseOutlined twoToneColor="#eb2f96" onClick={this.delhandle}/>
            </div>
        )
    }
}

export default FlashMsg
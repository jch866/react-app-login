import React from "react";
import FlashMsg from "./Msg"
import {connect} from "react-redux" // 当前组件关联redux
import {delFlashMsg} from "./../../actions/flashMsg"
class FlashMsgList extends React.Component{
    //message 存在redux里面
   
    render(){
        //this.props.message是个数组，我们需要生成一条条的数据 
      const  msgArray  = this.props.messages;
      const msglists = msgArray.map((msg)=>{
          return <FlashMsg key={msg.id} msg={msg} delFlashMsg={this.props.delFlashMsg}/>
      })
        return (
            <div>
                {/* <FlashMsg message={this.props.message}/> */}
                {msglists}
            </div>
        )
    }
}
//从state 中读取数据 
const  mapStateToProps = (state)=>{
    return {
        messages:state.flashMsg
    }
}
// [mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function)   
export default connect(mapStateToProps,{delFlashMsg})(FlashMsgList)
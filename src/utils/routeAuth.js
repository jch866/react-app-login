import React from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";
import {addFlashMsg} from "./../actions/flashMsg"
const myComposedComponent = function(ComposedComponent){
    class RouteAuth extends React.Component{
        componentWillMount(){
            if(!this.props.isLogined){
                this.props.addFlashMsg({
                    type:'danger',
                    text:'请先登录'
                })
                this.props.history.push('/login');
            }
        }
        componentWillUpdate(nextProps){
            
            console.log('shop componentWillUpdate')
            if(!nextProps.isLogined){
                this.props.history.push('/login');
            }
        }
        render(){
            return (
                <ComposedComponent {...this.props}></ComposedComponent>
            )
        }
    }
    const mapStateToProps = (state)=>{
        console.log(state)
        return {
            isLogined : state.auth.isLogined
        }
    }
    return withRouter(connect(mapStateToProps,{addFlashMsg})(RouteAuth))
}
export default myComposedComponent
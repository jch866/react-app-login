import React from "react";
import LoginForm from "./LoginForm";
import {connect} from "react-redux"
class LoginPage extends React.Component{
    render(){
        return (
            <LoginForm />
        )
    }
} 
const mapStateToProps = (state)=>{
    return {

    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        
    }
}
export default connect()(LoginPage)
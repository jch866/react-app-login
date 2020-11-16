import React from "react"
import SignupForm from "./SignupForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux"
import * as signupActions from "./../../actions/signupActions"
import * as flashActions from "./../../actions/flashMsg"
class SignupPage extends React.Component{
    
    render(){
        const {signupActions,flashActions} = this.props;
        return (<SignupForm signupActions = {signupActions} flashActions={flashActions}/>)
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        signupActions:bindActionCreators(signupActions,dispatch),
        flashActions:bindActionCreators(flashActions,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(SignupPage)
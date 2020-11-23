import React from 'react';
import ReactDOM from 'react-dom';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension"
import {createStore,applyMiddleware} from "redux"
import {Provider} from "react-redux"
import rootReducer from './reducers';
import 'antd/dist/antd.css'
import './index.css';
import routes from "./routes";
import {BrowserRouter as Router} from "react-router-dom"
import Nav from "./components/nav";
import FlashMsglists from "./components/flash/Msglists" //消息管理
import setAuthToken from "./utils/setAuthToken";
import  {setCurrentUser} from "./actions/loginActions"
import jwtDecode from "jwt-decode"
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))
let jwtToken = window.localStorage.getItem('jwtToken');
if(jwtToken){
  console.log(jwtDecode(jwtToken))
  setAuthToken(jwtToken)
  store.dispatch(setCurrentUser(jwtDecode(jwtToken)))
}
ReactDOM.render(
  <Provider store = {store}>
     <Router routes={routes}>
       <Nav/>
       <FlashMsglists/>
       {routes}
     </Router>
  </Provider>,
  document.getElementById('root')
);
 
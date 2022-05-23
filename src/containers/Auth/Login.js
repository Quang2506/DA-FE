import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
//import { FormattedMessage } from 'react-intl';
import "./Login.css";
import { Button } from "reactstrap";
import HandleLoginApi from "../../services/user_services";

const Login=()=> {

const [usename,setUsename]= useState('')
const [password,setPassword]=useState('')
const [isShowpass,setIsShowpass]= useState(true)
  
  const   handleOnChangeInputUserName = (e)=>{
        setUsename(e.target.value)
   }
  const handleOnChangeInputPassWork=(e)=>{
    
        setPassword(e.target.value)
    
   }
   const handleLogin=async()=>{
     try{
      const data = await HandleLoginApi(usename , password)
      console.log('email :',usename)
      console.log('pass :',password)
       console.log(data)
     }catch(e){
       console.log(e)
     }
       
   }
   const handleShowPass=()=>{
       
          setIsShowpass(!isShowpass)  
       
   }
  
    return (
      <div className="login_container">
        <div className="login_container-body row">
          <div className="col-12 login_container-header">Login</div>
          <div className="col-12 form-group">
            <label>UserName</label>
            <input 
            type="text"
             className="form-control" 
             placeholder="Enter your UserName"
            //  value={this.state.usename}
             onChange={
                 (e)=>handleOnChangeInputUserName(e)
             }
             />
          </div>
          <div className="col-12 form-group">
            <label>PassWord</label>
            <div className="custom-passWork">
            <input type={isShowpass?"password":"text"} 
            className="form-control"
             placeholder="Enter your PassWord" 
             onChange={e=>handleOnChangeInputPassWork(e)}
             />
             <span  onClick={()=>handleShowPass()}> {isShowpass?<i className="eye-pass fas fa-eye"></i>:<i className="eye-pass fas fa-eye-slash"></i>}</span>
             </div>
          </div>
          <Button className="col-12 btn-login" onClick={()=>handleLogin()}>Login</Button>
          <div className="col-12">
              <span>Forgot your PassWord ?</span>
              </div>
              
              <div className="col-12 socail-login">
        <i className="google-icon-login fab fa-google-plus-g"></i>
        <i className="facebook-icon-login fab fa-facebook"></i>
        </div>
        </div>
       
      </div>
    );
  
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

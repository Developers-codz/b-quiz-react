import "./auth.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { loginHandler } from "../../redux/reducers/authSlice";
import { useDispatch,useSelector } from "react-redux";

export const Login = () => {
  const dispatch = useDispatch();
  const [isEyeOpen, setOpen] = useState(false);
  const [details,setDetails] = useState({email:"",password:""})
  const {authenticating} = useSelector(store => store.auth)
  const changeHandler = (e)=>{
    setDetails(prev => ({...prev,[e.target.name]:e.target.value}))
  }
  const submitHandler = (e) =>{
    e.preventDefault();
    if(details.email === "" || details.password === ""){
      return;
    }
    dispatch(loginHandler(details))
    setDetails(prev => ({...prev,email:"",password:""}))
  }
  return (
    <div className="auth-wrapper">
      <h3 className="head">Login Now : </h3>
      <div className="auth-card">
        <form action="#" >
          <input
            type="email"
            name="email"
           value={details.email}
            className="input-field"
            placeholder="Enter your email here"
            required
            onChange={(e)=>changeHandler(e)}
          />
          <input
            type={isEyeOpen ? "text" : "password"}
            name="password"
            value={details.password}
            className="input-field"
            placeholder="Enter your password here"
            onChange={(e)=>changeHandler(e)}
            required
          />{" "}
          {isEyeOpen ? (
            <i
              className="far fa-eye eye reset"
              onClick={() => setOpen(false)}
            ></i>
          ) : (
            <i
              className="far fa-eye-slash eye reset"
              onClick={() => setOpen(true)}
            ></i>
          )}
          <button className="demo-login reset">
            Login With Test Credentials
          </button>
          <button className="auth-btn reset" type="submit" onClick={submitHandler} disabled={authenticating}>
            Login{" "}
          </button>
          <div className="signin-section">
            Don't have an account{" "}
            <u className="signin-btn">
              {" "}
              <Link to="/signup" className="text-secondary decor-none">
                Create Now
              </Link>
            </u>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

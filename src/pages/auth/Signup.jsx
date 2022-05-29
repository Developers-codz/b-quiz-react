import "./auth.css";

import React,{useState} from "react";
import { Link } from "react-router-dom";
import { signinHandler } from "../../redux/reducers/authSlice";
import { useDispatch,useSelector } from "react-redux";

export const Signup = () => {
  const dispatch = useDispatch();
    const [isEyeOpen, setOpen] = useState(false);
    const [details,setDetails] = useState({email:"",password:""})
    const [confirmPass,setConfirmPass] = useState("")
    const {authenticating} = useSelector(store => store.auth)
    const changeHandler = (e)=>{
      setDetails(prev => ({...prev,[e.target.name]:e.target.value}))
    }
    const submitHandler = (e) =>{
      e.preventDefault();
      if(details.email === "" || details.password === "" || details.password !== confirmPass){
        return;
      }
      dispatch(signinHandler(details))
      setDetails(prev => ({...prev,email:"",password:""}))
      setConfirmPass("")
    }
  return (
    <div className="auth-wrapper">
      <h3 className="head">Register Now : </h3>
      <div className="auth-card">
     
          <input
            type="email"
            name="email"
            value={details.email}
            className="input-field"
            placeholder="Enter your email here"
            onChange={(e)=>changeHandler(e)}
            required
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
          <input
            type="password"
            name="password"
            className="input-field"
            id="sign-pass-confirm"
            placeholder="Re-type your password"
            value={confirmPass}
            onChange={(e)=> setConfirmPass(e.target.value)}
            required
          />
          <div id="pass-checker-area"></div>
          <button className="auth-btn reset" type="submit" onClick={(e)=>submitHandler(e)} disabled={authenticating}>
            Sign Up
          </button>
          <div className="signin-section">
            Already have an account ?{" "}
            <u className="signin-btn">
              {" "}
              <Link to="/login" className="text-secondary decor-none">
                Login Now
              </Link>
            </u>{" "}
          </div>
        
      </div>
    </div>
  );
};

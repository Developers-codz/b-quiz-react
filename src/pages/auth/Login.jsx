import "./auth.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [isEyeOpen, setOpen] = useState(false);
  return (
    <div className="auth-wrapper">
      <h3 className="head">Login Now : </h3>
      <div className="auth-card">
        <form action="login.html">
          <input
            type="email"
            name="email"
            id="email"
            className="input-field"
            placeholder="Enter your email here"
            required
          />
          <input
            type={isEyeOpen ? "text" : "password"}
            name="password"
            id="login-pass"
            className="input-field"
            placeholder="Enter your password here"
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
          <button className="auth-btn reset" type="submit">
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

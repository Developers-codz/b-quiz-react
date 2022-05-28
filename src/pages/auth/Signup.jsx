import "./auth.css";

import React,{useState} from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
    const [isEyeOpen, setOpen] = useState(false);
  return (
    <div class="auth-wrapper">
      <h3 class="head">Register Now : </h3>
      <div class="auth-card">
        <form action="signup.html">
          <input
            type="text"
            name="name"
            id="name"
            class="input-field"
            placeholder="Enter your full name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            class="input-field"
            placeholder="Enter your email here"
            required
          />
          <input
            type={isEyeOpen ? "text" : "password"}
            name="password"
            id="sign-pass"
            class="input-field"
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
          <input
            type="password"
            name="password"
            class="input-field"
            id="sign-pass-confirm"
            placeholder="Re-type your password"
            required
          />
          <div id="pass-checker-area"></div>
          <button class="auth-btn reset" type="submit">
            Sign Up
          </button>
          <div class="signin-section">
            Already have an account ?{" "}
            <u class="signin-btn">
              {" "}
              <Link to="/login" class="text-secondary decor-none">
                Login Now
              </Link>
            </u>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

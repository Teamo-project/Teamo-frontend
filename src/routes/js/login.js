import React, { useEffect, useState } from "react";
import Navigation from "../../components/js/navigation.js";
import login from "../css/login.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Login() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const onChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Navigation />
      <div className={login.login_total}>
        <div className={login.login_box}>
          <form className={login.login_form}>
            <h1>Log In</h1>
            <p className={login.login_form_p}>
              It's time to check Your business
            </p>
            <input
              className={login.email}
              value={inputs.email}
              onChange={onChange}
              name="email"
              type="text"
              placeholder="xxxxxx@xxxxx.com"
            ></input>
            <input
              value={inputs.password}
              onChange={onChange}
              name="password"
              type="password"
              placeholder="Password"
            ></input>
            <a href="#" className={login.forgot}>
              Forgot your password?
            </a>
            <p className={login.sign_in_with}>Sign In With</p>
            <a href="#" className={login.btn}>
              <i className="fa-brands fa-square-facebook"></i>
            </a>
            <input
              className={login.signIn}
              type="submit"
              value="Log In"
            ></input>
          </form>
          <Link to="/SignUp" style={{ textDecoration: "none" }}>
            <Button className={login.signUp}>Sign Up</Button>
          </Link>
        </div>

        <div className={login.description_box}>
          <div className={login.description}>
            <h1>FEATURES</h1>
            <p>
              <i class="fa-regular fa-circle-check"></i>100% Free Sign Up
            </p>
            <p>
              <i class="fa-regular fa-circle-check"></i>Free register company
            </p>
            <p>
              <i class="fa-regular fa-circle-check"></i>Account can be linked
            </p>
            <p>
              <i class="fa-regular fa-circle-check"></i>Anyone can use
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

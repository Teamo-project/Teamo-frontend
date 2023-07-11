import { useState } from "react";
import signup from "../css/SignUp.module.css";
import Navigation from "../../components/js/navigation.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function SignUp() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirm: "",
    Name: "",
    phone_number: "",
    confirm_phone: "",
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
      <div className={signup.signup_total}>
        <div className={signup.signup_box}>
          <form className={signup.signup_form}>
            <h1>Sign Up</h1>
            <p className={signup.signup_form_p}>
              Sign up to clean up your business
            </p>
            <input
              className={signup.email}
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
            <input
              value={inputs.confirm}
              onChange={onChange}
              name="confirm"
              type="password"
              placeholder="Confirm Password"
            ></input>
            <input
              value={inputs.Name}
              onChange={onChange}
              name="Name"
              type="text"
              placeholder="Name"
            ></input>
            <input
              value={inputs.phone_number}
              onChange={onChange}
              name="phone_number"
              type="text"
              placeholder="Phone Number"
            ></input>
            <input
              value={inputs.confirm_phone}
              onChange={onChange}
              name="confirm_phone"
              type="text"
              placeholder="SMS Code"
            ></input>
            <input
              className={signup.signIn}
              type="submit"
              value="Send SMS Code"
            ></input>
          </form>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button className={signup.signIn_return}>Sign In</Button>
          </Link>
        </div>
        <div className={signup.description_box}>
          <div className={signup.description}>
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
export default SignUp;

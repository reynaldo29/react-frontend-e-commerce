import React from "react";
import "./Register.css"
const Register = () => {
  return (
    <div className="Container10">
      <div className="Wrapper4">
        <h1 className="Title4">CREATE AN ACCOUNT</h1>
        <form className="Form4">
          <input className="Input4" placeholder="name"/>
          <input className="Input4" placeholder="last name"/>
          <input className="Input4" placeholder="username"/>
          <input className="Input4" placeholder="email"/>
          <input className="Input4" placeholder="password"/>
          <input className="Input4" placeholder="confirm password"/>
          <span className="Agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className="Button4">CREATE</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

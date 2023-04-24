import React from 'react'
import "./Login.css"
const Login = () => {
  return (
    <div className="Container11">
      <div className="Wrapper5">
        <h1 className="Title5">SIGN IN</h1>
        <form className="Form5">
          <input className="Input5" placeholder="username"/>
          <input className="Input5" placeholder="password"/>
          <button className="Button5">LOGIN</button>
          <a className='Link5'>DO NOT YOU REMEMBER THE PASSWORD?</a>
          <a className='Link5'>DO CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  )
}

export default Login
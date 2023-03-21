import React from 'react'
import "./newsletter.css"
import { Send } from "@material-ui/icons";
const Newsleeter = () => {
  return (
    <div className='container8'>
        <h1 className='Title2'>Newsletter</h1>
        <div className='Desc'>Get timely updates from your favorite products.</div>
        <div className='InputContainer'>
            <input className='Input2' placeholder='Your email'></input>
            <button className='Button2'><Send/></button>
        </div>
    </div>
  )
}

export default Newsleeter
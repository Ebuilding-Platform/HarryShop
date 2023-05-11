import React from 'react'
import "./Contact.scss"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact = () =>{
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>BE IN TOUCH WITH US:</span>

        <div className="maill">
          <input type="text" placeholder='Enter your email...'/>
          <button>JOIN US</button>
        </div>

        <div className="icons">
          <FacebookIcon/>
          <InstagramIcon/>
          <GoogleIcon/>
          <TwitterIcon/>
        </div>
      </div>

    </div>
  )
}

export default Contact

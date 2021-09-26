import React from 'react'
import "./notfound.css"
import { Link } from 'react-router-dom';
import logo from "./4044.jpg" 

function NotFound() {
    return (
        <body>
              <div className="just">
              <img src={logo} className="error-picture" alt="logo" />           
                     <Link className = "back-home" to='/'> Go back home </Link>
              </div>  
              </body>
    )
}

export default NotFound

import React from "react";
import "./header.style.scss";
import {ReactComponent as Logo} from "../../assets/crown.svg"
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.util";
function header({current_user})
{
    return(
    <div className="header">
    <Link to="/" className="logo-container">  <Logo class="logo"/> </Link>
    <div className="options">
    <Link to="/shop"  className="option">SHOP</Link>
    <Link to="/contact" className="option">CONTACT</Link>
    {current_user?<div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>:<Link to="/signin" className="option">SIGN IN</Link>}

    </div>
   
    
    
   

    </div>);
}
export default header;
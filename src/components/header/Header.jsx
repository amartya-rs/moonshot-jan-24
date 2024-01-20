import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div className="header">
         <Link to={"/"} className="home">
            Homepage
         </Link>
         <div className="header-right">
            <div className="login">Login</div>
            <div className="create">Create Account</div>
         </div>
      </div>
   );
};

export default Header;

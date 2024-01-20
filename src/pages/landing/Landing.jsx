import React from "react";
import Header from "../../components/header/Header";
import "./landing.css";
import Searchbar from "../../components/searchbar/Searchbar";

function Landing() {
   return (
      <div className="landing">
         <Header />
         <div className="text">
            <div>Discover over 2,000,000</div>
            <div>free stock images</div>
         </div>
         <Searchbar placeholder={"Search"} />
      </div>
   );
}

export default Landing;

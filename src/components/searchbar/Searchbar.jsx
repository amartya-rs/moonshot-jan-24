import React, { useState } from "react";
import Search from "../../assets/search.png";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";

const Searchbar = ({ placeholder }) => {
   const [input, setSearchInput] = useState("");
   const navigate = useNavigate();

   const clickHandler = () => {
      if (input) {
         navigate(`/result/${input}`);
      }
   };

   return (
      <div className="wrapper">
         <img src={Search} alt="" className="search-icon" />
         <input
            type="text"
            placeholder={placeholder}
            className="input"
            value={input}
            onChange={(e) => setSearchInput(e.target.value)}
         />
         <button className="btn" onClick={clickHandler}>
            GO!
         </button>
      </div>
   );
};

export default Searchbar;

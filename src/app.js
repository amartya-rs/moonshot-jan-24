import React from "react";
import { Outlet } from "react-router-dom";
import "./app.css";

function App() {
   return (
      <div>
         <Outlet />
      </div>
   );
}

export { App };

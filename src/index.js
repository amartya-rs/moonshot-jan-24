import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./app";
import Landing from "./pages/landing/Landing";
import Result from "./pages/result/Result";

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Landing />,
         },
         {
            path: "/result/:term",
            element: <Result />,
         },
      ],
   },
]);

root.render(<RouterProvider router={appRouter} />);

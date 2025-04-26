import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import ErrorPage from "../pages/ErrorPage";
import React from "react";
import Login from "../pages/Login";
import Layouts from "./Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;

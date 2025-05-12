import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import About from './components/About';
import Contact from "./components/Contact";
import Home from "./components/Home";
import LayOut from "./components/LayOut";
import SignUp from "./components/SignUp";
import LogIn from "./components/SignUp";
function App() {
  return (
    <div className=" bg-black text-white h-screen">
       <BrowserRouter>
        <Routes>
             <Route element={<LayOut/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="About" element={<About/>}/>
              <Route path="Contact" element={<Contact/>}/>
              <Route path="/*" element={<div>404 Not found</div>}/>
             </Route>
              <Route  path="SignUp" element={<SignUp/>}/>
              <Route  path="LogIn" element={<LogIn/>}/>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

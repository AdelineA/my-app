import React from 'react'
import { Outlet } from 'react-router'
import Footer from './Footer'
import NavBar from './NavBar'

const LayOut = () => {
  return (
    <div class='flex flex-col min-h-screen'>
        
        <NavBar/>
        <Outlet/>
        <div>
        <Footer/>
        </div>
    </div>
  )
}

export default LayOut
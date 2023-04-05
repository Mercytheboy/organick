import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Footer } from '.'
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
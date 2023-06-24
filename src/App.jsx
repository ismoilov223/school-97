import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Navbar from './components/Navbar'
import Topnavbar from './components/Topnavbar'

const App = () => {
  return (
    <div>
      <Topnavbar></Topnavbar>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
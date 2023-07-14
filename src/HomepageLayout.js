import React from "react"
import Header from "./Headers/Header"
import Footer from "./Footer"
import { Outlet,Link } from "react-router-dom"

export default function HomePageLayout()
{
  return(<div>
    <Header />
    <div id="view_type">
      <div><Link to="/">Desktop View</Link></div>
     <div><Link to="/mobile">Mobile View</Link></div>
    </div>
   <Outlet />
    <Footer />
  </div>)
}
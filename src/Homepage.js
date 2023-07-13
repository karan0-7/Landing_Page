import React from "react"
import Header from "./Headers/Header"
import Footer from "./Footer"

export default function HomePage()
{
  return(<div>
    <Header />
    <div id="homepage_iframe">
    <iframe src="http://localhost:3000/main"/>
    </div>
    <Footer />
  </div>)
}
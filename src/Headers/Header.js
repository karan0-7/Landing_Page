import React from "react"
import HeaderProducts from "./HeaderProducts"
import HeaderOffers from "./HeaderOffers"

export default function Header()
{
  return(<header>
<div id="header">
  <div id="header-main">
    <img id="header-main-img" src="https://cdn.logojoy.com/wp-content/uploads/2018/05/15150201/4122.png" alt="not found" />
    <HeaderProducts />
    <HeaderOffers />
    <h1>Pricing</h1>
    <h1>Learn</h1>
    <h1>Contacts</h1>
  </div>
  <div id="header-secondary">
    <img className="icon" src="https://img.icons8.com/?size=512&id=132&format=png" alt="not found"/>
    <div id="login">
      <h1>Log In</h1>
        </div>
    <div id="freeTrial">
    <h1>Start my free trial</h1>
    </div>
  </div>
</div>
  </header>)
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import HomePageLayout from './HomepageLayout';
import Home from './Home';
import MobileView from './MobileView';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path='/' element={<HomePageLayout />} >
  <Route index element={<Home />} />
  <Route path='/mobile' element={<MobileView />} />
  </Route>
  <Route path='/main' element={<Main />} />
  
  </Route>
    
))

function App() {
  return (
    <RouterProvider router={router} />
  )   
}

 

ReactDOM.createRoot(document.getElementById("root")).render(<App />) 


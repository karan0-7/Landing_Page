import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Homepage';
import Main from './Main';
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom';


const router = createBrowserRouter(createRoutesFromElements(
  <Route>
  <Route path='/' element={<HomePage />} />
  <Route path='/main' element={<Main />} />
  
  </Route>
    
))

function App() {
  return (
    <RouterProvider router={router} />
  )   
}

 

ReactDOM.createRoot(document.getElementById("root")).render(<App />) 


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Pages/HomePage/Home'
import Navbar from './Components/Navbar/Navbar'
import Services from './Pages/Services/Services'
import Portfolio from './Pages/Portfolio/Portfolio'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/services",
          element: <Services/>
        },
        {
          path: "/portfolio",
          element: <Portfolio/>
        },
        {
          path: "/about",
          element: <About/>
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router}/>
  );
}

export default App

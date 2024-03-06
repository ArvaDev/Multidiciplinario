import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/home'
import About from './pages/About';
import Pimienta from './pages/Pimienta';
import Cafe from './pages/Cafe';
import Forms from './pages/Form';
import Production from './pages/Productos/Productos';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/About",
    element: <About />
  },
  {
    path: "/Pimienta",
    element: <Pimienta />
  },
  {
    path: "/Cafe",
    element: <Cafe />
  },
  {
    path: "/Form",
    element: <Forms/>
  },
  {
    path: "/Productos",
    element: <Production/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

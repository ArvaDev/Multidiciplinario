import './main.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home'
import About from './pages/About/About';
import Pimienta from './pages/Pimienta/Pimienta';
import Cafe from './pages/Cafe/Cafe';
import Forms from './pages/Form/Form';
import Production from './pages/Productos/Productos';
import Tienda from './pages/Tienda/Tienda'
import Manual from './pages/Manual/Manual';
import NoFound from './pages/NoFound/NoFound';
import Carrito from './pages/Carrito/Carrito';

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
    element: <Forms />
  },
  {
    path: "/Productos",
    element: <Production />
  },
  {
    path: "/Tienda",
    element: <Tienda />
  },
  {
    path:'/Manual',
    element: <Manual />
  },
  {
    path: '/Tienda/Carrito',
    element: <Carrito />
  },
  {
    path: "*",
    element: <NoFound />
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

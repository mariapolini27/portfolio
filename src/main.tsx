import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import Header from './componentes/header/Header'
import Portfolio from './componentes/portfolio/Portfolio'
import Main from './componentes/main/Main'
import Contato from './contato/Contato'
import Footer from './componentes/footer/Footer'

import{createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Header/>
      <Portfolio/>
      <Main/>
      <Footer/>
    </>,
    
  
  },
  {
    path: "/inicio",
    element: <div>Pagina de Inicio!</div>,
  },
  {
    path: "/sobre",
    element: <div>Pagina Sobre!</div>,
  },
  {
    path: "/contato",
    element: <div><Contato/></div>,
  },


]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

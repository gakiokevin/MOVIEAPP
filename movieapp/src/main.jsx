import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//import { createBrowserRouter,RouterProvider } from 'react-router-dom'
//import ErrorPage from './ErrorPage.jsx'
// const router = createBrowserRouter([
//   {path:'/:name?',
//   element:<App/>,
//   errorElement:<ErrorPage/>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Pages/Root.jsx';
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AllArt from './Pages/AllArt.jsx';
import AddCraft from './Pages/AddCraft.jsx';
import MyArt from './Pages/MyArt.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/all',
        element: <AllArt></AllArt>
      },
      {
        path: '/add',
        element: <AddCraft></AddCraft>
      },
      {
        path: '/myart',
        element: <MyArt></MyArt>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)

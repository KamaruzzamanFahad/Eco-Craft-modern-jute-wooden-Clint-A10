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
import Error from './Pages/Error.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AllArt from './Pages/AllArt.jsx';
import AddCraft from './Pages/AddCraft.jsx';
import MyArt from './Pages/MyArt.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import LogRegiProtect from './Pages/LogRegiProtect.jsx';
import ProtectedRout from './Pages/ProtectedRout.jsx';
import ViewDetils from './Pages/ViewDetils.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <LogRegiProtect><Login></Login></LogRegiProtect>
      },
      {
        path: '/register',
        element:<LogRegiProtect><Register></Register></LogRegiProtect>
      },
      {
        path: '/all',
        element: <AllArt></AllArt>
      },
      {
        path: '/add',
        element: <ProtectedRout><AddCraft></AddCraft></ProtectedRout>
      },
      {
        path: '/myart',
        element: <ProtectedRout><MyArt></MyArt></ProtectedRout>
      },
      {
        path:'/detils/:id',
        element:<ViewDetils></ViewDetils>,
        loader: ({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
      }
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

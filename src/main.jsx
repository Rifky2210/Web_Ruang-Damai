import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home.jsx';
import ErorrPage from './pages/404.jsx';
import FullArtikel from './pages/FullArtikel.jsx';
import Artikel from './pages/Artikel.jsx';
import Videos from './pages/Videos.jsx';
import FullVideo from './pages/FullVideo.jsx';
import Konseling from './pages/Konseling.jsx';
import Chat from './pages/Chat.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Webinar from './pages/Webinar.jsx';
import FullWebinar from './pages/FullWebinar.jsx';




const router = createBrowserRouter([
  {
    path: "*",
    element: <ErorrPage/>
  },
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/artikel",
    element: <Artikel />,
  },
  {
    path: "/video",
    element: <Videos />,
  },
  {
    path: "/konseling",
    element: <Konseling />,
  },
  {
    path: "/webinar",
    element: <Webinar />,
  },
  {
    path: "/yumi",
    element: <Chat />,
  },
  {
    path: "/artikel/:id",
    element: <FullArtikel />,
  },
  {
    path: "/video/:id",
    element: <FullVideo />,
  },
  {
    path: "/webinar/:id",
    element: <FullWebinar />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
   
  </React.StrictMode>,
)

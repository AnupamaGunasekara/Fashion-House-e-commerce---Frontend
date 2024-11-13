import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Login from '../Components/Login';
import Register from '../Components/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>Home Page</div>,
      },
    ],
  },
  {
      path: "/login",
      element: <Login/>
  },
  {
    path: "/register",
    element: <Register/> 
  }
]);

export default router;

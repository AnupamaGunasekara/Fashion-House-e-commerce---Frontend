import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>,
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
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />, // TODO: user private routes here
    children: [
        // user routes
        { path: "", element: <div>User Dashboard</div> },
        { path: "orders", element: <div>User Orders</div> },
        { path: "payments", element: <div>User Payments</div> },
        { path: "profile", element: <div>User Profile</div> },
        { path: "reviews", element: <div>User Reviews</div> },

        // admin routes (only accessible by admin) TODO: private routes with role field
        { path: "admin", element: <div>Admin Main</div> },
        { path: "add-new-post", element: <div>New Post</div> },
        { path: "manage-products", element: <div>Manage Products</div> },
        { path: "update-product/:id", element: <div>Update Product</div> },
        { path: "users", element: <div>All Users</div> },
        { path: "manage-orders", element: <div>Manage Orders</div> }
    ]
}

]);

export default router;

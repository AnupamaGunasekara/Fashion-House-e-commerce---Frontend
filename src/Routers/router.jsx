import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import SingleProduct from "../pages/shop/productDetails/SingleProduct";
import Home from '../pages/home/Home';
import Login from '../Components/Login';
import Register from '../Components/Register';
import DashboardLayout from '../pages/Dashboard/DashboardLayout';
import PaymentSuccess from '../Components/PaymentSuccess';
import React from 'react'
import PrivateRoute from "./PrivateRoute";
import AdminDMain from "../pages/Dashboard/Admin/Dashboard/AdminDMain";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
        {path: '/',element: <Home/>},
        {path: "/categories/:categoryName", element: <CategoryPage /> },
        { path: "/search", element: <Search /> },
        { path: "/shop", element: <ShopPage /> },
        { path: "/shop/:id", element: <SingleProduct /> },
        { path: "/success", element: <PaymentSuccess/>} 
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
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>, // TODO: user private routes here
    children: [
        // user routes
        { path: "", element: <div>User Dashboard</div> },
        { path: "orders", element: <div>User Orders</div> },
        { path: "payments", element: <div>User Payments</div> },
        { path: "profile", element: <div>User Profile</div> },
        { path: "reviews", element: <div>User Reviews</div> },

        // admin routes (only accessible by admin) TODO: private routes with role field
        { path: "admin", element: <PrivateRoute role="admin"><AdminDMain/></PrivateRoute> },
        { path: "add-new-post", element:<PrivateRoute role="admin"><div>New Post</div></PrivateRoute>  },
        { path: "manage-products", element: <PrivateRoute role="admin"><div>Manage Products</div></PrivateRoute> },
        { path: "update-product/:id", element:<PrivateRoute role="admin"><div>Update Product</div></PrivateRoute>},
        { path: "users", element:<PrivateRoute role="admin"><div>All Users</div> </PrivateRoute> },
        { path: "manage-orders", element:<PrivateRoute role="admin"><div>Manage Orders</div></PrivateRoute>}
    ]
}

]);

  export default router;
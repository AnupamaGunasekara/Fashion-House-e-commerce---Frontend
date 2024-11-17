import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element:<div>Home Page</div>},
        {path: "/categories/:categoryName", element: <CategoryPage /> },
        { path: "/search", element: <Search /> },
        { path: "/shop", element: <ShopPage /> },
      ]
    },
    // dashboard routes start here
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
      children: [
          // user routes
          { path: '',element:<div>User Dashboard</div> },
          { path: 'orders', element:<div>User Orders</div>},
          { path: 'payments', element:<div>User payments</div> },
          { path: 'profile', element:<div>User profile</div> },
          { path: 'reviews', element:<div>User reviews</div> },
      //     { path: '', element: <UserDMain/>},
      //     { path: 'orders', element: <UserOrders/> },
      //     { path: 'payments', element: <UserPayments/> },
      //     { path: 'profile', element: <UserProfile/> },
      //     { path: 'reviews', element: <UserReviews/> },


           // admin routes (only accessible by admin) Todo: private routes with role field
           {
               path: "admin",
               element:<PrivateRoute role="admin"><div>Admin Main</div> </PrivateRoute>
      //         element: <PrivateRoute role="admin"><AdminDMain/></PrivateRoute>
          },
           {
               path: "add-product",
               element:<PrivateRoute role="admin"><div>Add Product</div></PrivateRoute>

      //         element: <PrivateRoute role="admin"><AddProduct/></PrivateRoute>
           },
           {
               path: "manage-products",
               element: <PrivateRoute role="admin"><div>Manage Product</div></PrivateRoute>
      //         element: <PrivateRoute role="admin"><ManageProduct/></PrivateRoute>

           },
           {
               path: "update-product/:id",
               element:<PrivateRoute role="admin"><div>Update Product</div></PrivateRoute>
      //         element: <PrivateRoute role="admin"><UpdateProduct/></PrivateRoute>
           },
           { 
            path: "users", 
            element:<PrivateRoute role="admin"><div>Users</div></PrivateRoute>
      //      element: <PrivateRoute role="admin"><ManageUser/></PrivateRoute> 
           },
           { 
            path: "manage-orders", 
            element:<PrivateRoute role="admin"><div>Manage Orders</div></PrivateRoute>
      //     element: <PrivateRoute role="admin">
      //         <ManageOrders/>
      //         </PrivateRoute> 
           },
       ]
  }

  ]);

  export default router;
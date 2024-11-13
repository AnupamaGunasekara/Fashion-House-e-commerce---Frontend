import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CategoryPage from "../pages/category/CategoryPage";
import Search from "../pages/search/Search";
import ShopPage from "../pages/shop/ShopPage";

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
  ]);

  export default router;
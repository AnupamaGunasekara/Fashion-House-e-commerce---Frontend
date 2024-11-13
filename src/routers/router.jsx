import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import CategoryPage from "../pages/category/CategoryPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {path: "/", element:<div>Home Page</div>},
        { path: "/categories/:categoryName", element: <CategoryPage /> },
      ]
    },
  ]);

  export default router;
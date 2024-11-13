import React from 'react';
import { createBrowserRouter, Route } from 'react-router-dom';
import App from '../App';
import SingleProduct from '../pages/shop/productDetails/SingleProduct';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <div>Home Page</div>,
      },
      {
        path: '/shop/:id', element: <SingleProduct />
      },
    ],
  },
]);

export default router;

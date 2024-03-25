import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import ErrorPage from './Component/Error/ErrorPage.jsx';
import Banner from './Component/Banner/Banner.jsx';
import Home from './Component/Home/Home.jsx';
import PagesToRead from './Component/PagesToRead/PagesToRead.jsx';
import ListedBooks from './Component/ListedBooks/ListedBooks.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element:     <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/PagesToRead",
        element: <PagesToRead />,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

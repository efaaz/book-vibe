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
import CardDetails from './Component/CardDetails/CardDetails.jsx';
import UserContexProvider from './Component/Context/Context.jsx';
import App from './Component/BarChart/BarChart.jsx';



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
        loader: ()=> fetch('/api.json')
      },
      {
        path: "/CardDetails/:bookId",
        element: <CardDetails />,
        // children: [
        //   {
        //     path: "/:bookId",
        //     element: <Home />,
        //   },
        // ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContexProvider>
    <RouterProvider router={router} />
    </UserContexProvider>
  </React.StrictMode>,
)

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./Component/Root/Root.jsx";
import ErrorPage from "./Component/Error/ErrorPage.jsx";
import Home from "./Component/Home/Home.jsx";
import PagesToRead from "./Component/PagesToRead/PagesToRead.jsx";
import ListedBooks from "./Component/ListedBooks/ListedBooks.jsx";
import CardDetails from "./Component/CardDetails/CardDetails.jsx";
import UserContexProvider from "./Component/Context/Context.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./Component/AboutUs/AboutUs.jsx";
import Contacts from "./Component/Contacts/Contacts.jsx";
import AuthProvider from "./Component/Context/AuthProvider.jsx";
import Register from "./Component/Register/Register.jsx";
import Login from "./Component/LogIn/Login.jsx";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/PagesToRead",
        element:<PrivateRoute><PagesToRead /></PrivateRoute> ,
        loader: () => fetch("/api.json"),
      },
      {
        path: "/ListedBooks",
        element: <PrivateRoute><ListedBooks /></PrivateRoute>,
        loader: () => fetch("/api.json"),
      },
      {
        path: "/CardDetails/:bookId",
        element: <PrivateRoute><CardDetails /></PrivateRoute>,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Contacts",
        element: <Contacts />,
      },
      {
        path: "/Sign-up",
        element: <Register />,
      },
      {
        path: "/Sign-in",
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserContexProvider>
        <RouterProvider router={router} />
      </UserContexProvider>
    </AuthProvider>
  </React.StrictMode>
);

import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./error-page";
import AuthProvider from "./providers/AuthProvider";
import Home from "./components/Home";
import Instructors from "./components/Instructors";
import Classes from "./components/Classes";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import Profile from "./components/Profile";
import AddAClass from "./components/AddAClass";
import Dashboard from "./Layout/Dashboard";
import AllUsers from "./pages/Dashboard/AllUsers/AllUsers";
import { HelmetProvider } from "react-helmet-async";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import StudenHome from "./pages/Dashboard/StudentHome/StudenHome";
import AdminHome from "./pages/Dashboard/AdminHome/AdminHome";
import Order from "./pages/Order/Order";
import MyCart from "./pages/Dashboard/MyCart/MyCart";
import ClassCard from "./components/ClassCard";
import Class from "./components/Class";
import Main from "./Layout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/class",
        element: <Class></Class>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "/AddAClass",
        element: (
          <PrivateRoute>
            <AddAClass></AddAClass>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "classcard",
        element: <ClassCard></ClassCard>,
      },
      {
        path: "mycart",
        element: <MyCart></MyCart>,
      },
      {
        path: "studenthome",
        element: <StudenHome></StudenHome>,
      },

      // admin routes
      {
        path: "adminhome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>
);

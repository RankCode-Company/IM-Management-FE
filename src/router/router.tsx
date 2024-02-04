/**
 * Routes will live here.
 */

import { createBrowserRouter } from "react-router-dom";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home/Home";
// import AboutPage from "./pages/AboutPage";
import LoginPage from "../pages/login/Login";
import LoadingComponent from "../components/LoadingComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingComponent />,
    children: [
      { index: true, element: <Home /> },
      //   { path: "about", element: <AboutPage /> },
      // Define more nested routes as needed
    ],
  },
  {
    path: "/login",
    element: <LoginPage />, // LoginPage is outside the Layout to not show the AppBar
  },
  // Add more routes as needed
]);

export default router;

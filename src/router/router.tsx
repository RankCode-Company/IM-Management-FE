/**
 * Routes will live here.
 */

import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import LoginPage from "../pages/login/Login";
import LoadingComponent from "../components/LoadingComponent";
import { AboutRoutes, OrdersRoutes, SpreadSheetRoutes } from "./routes";
//TODO: Consider adding lazy loading into components.
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoadingComponent />,
    children: [
      { index: true, element: <Home /> },
      ...AboutRoutes,
      ...OrdersRoutes,
      ...SpreadSheetRoutes,
      //TODO: Define the other routes, currently: add, view profile?, view reports?, delete, update.
    ],
  },

  {
    path: "/login",
    element: <LoginPage />, // LoginPage is outside the Layout to not show the AppBar, probably will also add register here
  },
  // Add more routes as needed
]);

export default router;

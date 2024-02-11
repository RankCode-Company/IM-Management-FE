import OrdersAdd from "../pages/orders/OrdersAdd";
import Orders from "../pages/orders/Orders";
import Spreadsheet from "../pages/spreadsheet/Spreadsheet";
import About from "../pages/about/About";

// import OrdersList from "../pages/orders/OrdersList";
//TODO: Add some sort of validation to routes that should be authenticated.
export const OrdersRoutes = [
  { path: "orders", element: <Orders /> },
  { path: "orders/add", element: <OrdersAdd /> },
];
export const SpreadSheetRoutes = [
  { path: "spreadsheet", element: <Spreadsheet /> },

];
export const AboutRoutes = [
  { path: "about", element: <About /> },
]
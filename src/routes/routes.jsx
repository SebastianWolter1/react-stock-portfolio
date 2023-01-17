import AddStockForm from "../pages/AddStock";
import Depot from "../pages/Depot";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const routes = [
  { path: "/", element: <Home />, id: 1 },
  { path: "/add-stock", element: <AddStockForm />, id: 2 },
  { path: "/depot", element: <Depot />, id: 3 },
  { path: "/*", element: <NotFound />, id: 4 },
];

export default routes;

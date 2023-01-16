import Home from "./Home";
import AddStockForm from "./AddStock";
import Depot from "./Depot";
import NotFound from "./NotFound";


const routes = [
  { path: "/", element: <Home/>, id: 1 },
  { path: "/add-stock", element: <AddStockForm/>, id: 2 },
  { path: "/depot", element: <Depot/> , id: 3 },
  { path: "/*", element: <NotFound />, id: 4 },
];

export default routes;

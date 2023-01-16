import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { StockContext } from "../global/Context";
import Themes from "./Themes";


const NavBar = () => {

  const {showNavbar, setShowNavbar } = useContext(StockContext);

  const items = [
    { name: "Login", to: "/" },
    { name: "Depot", to: "/depot" },
    { name: "Add Stock", to: "/add-stock" },
  ];
  return (
    <>
    {showNavbar &&
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.to}>
                <NavLink to={item.to}>{item.name}</NavLink>
              </li>
            );
          })}
          <li>
            <Themes />
          </li>
        </ul>
      </nav>}
    </>
  );
};

export default NavBar;

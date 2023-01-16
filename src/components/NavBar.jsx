import { NavLink } from "react-router-dom";
import Themes from "./Themes";
import { StockContext } from "../global/Context";
import { useContext } from "react";


const NavBar = () => {

  const {showNavbar, setShowNavbar } = useContext(StockContext);

  const items = [
    { name: "Home", to: "/" },
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

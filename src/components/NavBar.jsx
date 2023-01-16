import { NavLink } from "react-router-dom";
import Themes from "./Themes";

const NavBar = () => {
  const items = [
    { name: "Home", to: "/" },
    { name: "Add Stock", to: "/add-stock" },
    { name: "Depot", to: "/depot" },
  ];
  return (
    <>
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
      </nav>
    </>
  );
};

export default NavBar;

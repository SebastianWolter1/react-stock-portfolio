import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Themes from "../features/globalstyle/Themes";
import { StockContext } from "../global/Context";

const NavBar = () => {
  const { showNavbar, setShowNavbar } = useContext(StockContext);

  const items = [
    { name: "Login", to: "/" },
    { name: "Depot", to: "/depot" },
    { name: "Add Stock", to: "/add-stock" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showNavbar && (
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
      )}
    </>
  );
};

export default NavBar;

import Themes from "../features/globalstyle/Themes";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="themes-btn">
        <Themes />
      </div>
    </>
  );
};

export default Header;

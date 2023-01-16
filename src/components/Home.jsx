import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StockContext } from "../global/Context";
import Themes from "./Themes";

const Home = () => {
  const { showNavbar, setShowNavbar } = useContext(StockContext);

  useEffect(() => {
    setShowNavbar(false);
  }, []);

  const navigate = useNavigate();
  const [password, setPassword] = useState();

  const handleChange = (e) => {
    setPassword(parseFloat(e.target.value));
    console.log(password);
  };

  console.log(password);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 12) {
      setShowNavbar(true);
      navigate("/depot");
    } else {
      alert("! Access denied !");
    }
  };

  return (
    <>
      <Themes />
      <h1>Portfolio App</h1>
      <img src="../../istockphoto-1127134297-612x612.jpg" alt="" />
      <h3>Login with Password</h3>
      <form className="addstock-wrapper">
        <label>
          Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Home;

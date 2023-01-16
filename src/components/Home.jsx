import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StockContext } from "../global/Context";




const Home = () => {
  const {showNavbar, setShowNavbar } = useContext(StockContext);

useEffect(()=>{
  setShowNavbar(false)
})

const navigate = useNavigate()
  const [password, setPassword] = useState(12)
  const handleChange = (e) => {
    setPassword(parseFloat(e.target.value));

  };

  console.log(password);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 12) {
      setShowNavbar(true)
      navigate("/depot")
    } else {
      alert("! Access denied !")
    }
  };
  
  return (
    <>
    <h2>Login with Password</h2>
    <form>
    <label>
      Password:
      <input type="password" name="password" onChange={handleChange} />
    </label>
    <button type="submit" onClick={handleSubmit}>Submit</button>
  </form>
  </>
);
}

export default Home;


import { useEffect, useState } from "react";

const Themes = () => {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div className="box">
        <button className="toggler" onClick={toggleTheme}>
          Light/Dark
        </button>
      </div>
    </>
  );
};

export default Themes;

import React, { createContext, useState } from "react";
import portfolio from "../data/portfolioData";
export const StockContext = createContext();

const StockContextProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(portfolio);
  const [showNavbar, setShowNavbar] = useState(true);



  return (
    <StockContext.Provider
      value={{ portfolioData, setPortfolioData, showNavbar, setShowNavbar}}
    >
      {children}
    </StockContext.Provider>
  );
};

export default StockContextProvider;

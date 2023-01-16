import React, { createContext, useState } from "react";
import portfolio from "../data/portfolioData";
export const StockContext = createContext();

const StockContextProvider = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState(portfolio);
  
  return (
    <StockContext.Provider value={{portfolioData, setPortfolioData}}>
      {children}
    </StockContext.Provider>
  );
}

export default StockContextProvider;
import React, { useContext } from "react";
import { StockContext } from "../global/Context";
import StockPieChart from "./PieChart.jsx";
import Value from "./Value.jsx";

const Depot = () => {
  const { portfolioData, setPortfolioData } = useContext(StockContext);

  const handleDelete = (index) => {
    const newPortfolio = portfolioData.filter((_, i) => i !== index);
    setPortfolioData(newPortfolio);
  };

  const handleChange = (index, newValue, newQuantity) => {
    const updatedPortfolio = portfolioData.map((stock, i) => {
      if (i === index) {
        return {
          ...stock,
          value: parseFloat(newValue),
          quantity: parseFloat(newQuantity),
        };
      }
      return stock;
    });
    setPortfolioData(updatedPortfolio);
    console.log(updatedPortfolio);
  };

  return (
    <div>
      <h1>My Portfolio</h1>
      <br />
      <br />
      {portfolioData.length > 0 && (
        <>
          <table className="table">
            <thead className="table-head">
              <tr className="table-head">
                <th>Name</th>
                <th>Buy In</th>
                <th>Value</th>
                <th>Dividend</th>
                <th>Quantity</th>
                <th>Wert der Position</th>
                <th>Veränderung der Position</th>
                <th>Dividende der Position</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolioData.map((stock, index) => (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.buyIn.toFixed(2)}</td>
                  <td>
                    <input
                      type="number"
                      value={stock.value}
                      onChange={(e) =>
                        handleChange(index, e.target.value, stock.quantity)
                      }
                    />
                  </td>
                  <td>{stock.dividend}</td>
                  <td>
                    <input
                      type="number"
                      value={stock.quantity}
                      onChange={(e) =>
                        handleChange(index, stock.value, e.target.value)
                      }
                    />
                  </td>
                  <td>{(stock.value * stock.quantity).toFixed(2)}</td>
                  <td>
                    {(
                      stock.value * stock.quantity -
                      stock.buyIn * stock.quantity
                    ).toFixed(2)}
                  </td>
                  <td>
                    {(
                      (stock.value * stock.quantity * stock.dividend) /
                      100
                    ).toFixed(2)}
                  </td>
                  <td>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
        </>
      )}
      <Value portfolio={portfolioData} />
      <StockPieChart portfolioData={portfolioData} />
    </div>
  );
};

export default Depot;

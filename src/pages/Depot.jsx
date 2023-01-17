import React, { useContext } from "react";
import StockPieChart from "../features/depot/PieChart";
import { StockContext } from "../global/Context";
import Value from "../features/depot/Value.jsx";

const Depot = () => {
  const { portfolioData, setPortfolioData, showNavbar, setShowNavbar } =
    useContext(StockContext);

  const handleDelete = (index) => {
    const newPortfolio = portfolioData.filter((_, i) => i !== index);
    setPortfolioData(newPortfolio);
  };

  const handleChange = (index, newValue, newDividend) => {
    const updatedPortfolio = portfolioData.map((stock, i) => {
      if (i === index) {
        return {
          ...stock,
          value: parseFloat(newValue),
          dividend: parseFloat(newDividend),
        };
      }
      return stock;
    });
    setPortfolioData(updatedPortfolio);
    console.log(updatedPortfolio);
  };

  return (
    <div>
      <br />
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
                <th>Value €</th>
                <th>Quantity</th>
                <th>Dividend % p.A.</th>
                <th>Position Value</th>
                <th>Performance</th>
                <th>Dividende der Position p.A.</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {portfolioData.map((stock, index) => (
                <tr key={index}>
                  <td>
                    <strong>{stock.name}</strong>
                  </td>
                  <td>{stock.buyIn.toFixed(2)}€</td>
                  <td>
                    <input
                      type="number"
                      value={stock.value}
                      onChange={(e) =>
                        handleChange(index, e.target.value, stock.dividend)
                      }
                    />
                  </td>
                  <td>{stock.quantity}</td>
                  <td>
                    <input
                      type="number"
                      value={stock.dividend}
                      onChange={(e) =>
                        handleChange(index, stock.value, e.target.value)
                      }
                    />
                  </td>
                  <td>{(stock.value * stock.quantity).toFixed(2)}€</td>
                  <td>
                    {(
                      stock.value * stock.quantity -
                      stock.buyIn * stock.quantity
                    ).toFixed(2)}
                    €
                  </td>
                  <td>
                    {(
                      (stock.value * stock.quantity * stock.dividend) /
                      100
                    ).toFixed(2)}
                    €
                  </td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
        </>
      )}
      <div className="total-value-info">
        <Value portfolio={portfolioData} />

        <StockPieChart portfolioData={portfolioData} />
      </div>
    </div>
  );
};

export default Depot;

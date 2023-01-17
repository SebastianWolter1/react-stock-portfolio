import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StockContext } from "../global/Context";

const AddStockForm = () => {
  const { portfolioData, setPortfolioData } = useContext(StockContext);

  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [buyIn, setBuyIn] = useState("");
  const [dividend, setDividend] = useState("");
  const [quantity, setQuantity] = useState("");

  const navigate = useNavigate();

  const onAdd = (newStock) => {
    let existingStock = portfolioData.find(
      (stock) => stock.name === newStock.name
    );
    if (existingStock) {
      existingStock.value = newStock.value;
      existingStock.dividend = newStock.dividend;
      existingStock.buyIn =
        (existingStock.buyIn * existingStock.quantity +
          newStock.buyIn * newStock.quantity) /
        (existingStock.quantity + newStock.quantity);
      existingStock.quantity = existingStock.quantity + newStock.quantity;
    } else {
      const updatedPortfolio = [...portfolioData, newStock];
      setPortfolioData(updatedPortfolio);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      name,
      buyIn: parseFloat(buyIn),
      value: parseFloat(value),
      dividend: parseFloat(dividend),
      quantity: parseInt(quantity),
    });
    setName("");
    setValue("");
    setDividend("");
    setQuantity("");
    setBuyIn("");
    navigate("/depot");
  };

  return (
    <>
      <br />
      <h2>What did you buy?</h2>
      <br />
      <form className="addstock-wrapper" onSubmit={handleSubmit}>
        <label>
          Stock Name:
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          BuyIn:
          <br />
          <input
            type="number"
            value={buyIn}
            onChange={(e) => setBuyIn(Number(e.target.value))}
          />
        </label>
        <label>
          Stock Value:
          <br />
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>
        <label>
          Dividend Value:
          <br />
          <input
            type="number"
            value={dividend}
            onChange={(e) => setDividend(e.target.value)}
          />
        </label>
        <label>
          Quantity:
          <br />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <button type="submit">Add Stock</button>
      </form>
    </>
  );
};

export default AddStockForm;

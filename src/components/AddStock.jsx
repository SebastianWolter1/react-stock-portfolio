import React, { useContext, useState } from "react";
import { StockContext } from "../global/Context";
  

const AddStockForm = () => {
  const { portfolioData, setPortfolioData } = useContext(StockContext);

    const [name, setName] = useState('');
    const [value, setValue] = useState('');
    const [buyIn, setBuyIn] = useState('');

    const [dividend, setDividend] = useState('');
    const [quantity, setQuantity] = useState('');
    
    const onAdd = (newStock) => {
      const updatedPortfolio = [...portfolioData, newStock];
      setPortfolioData(updatedPortfolio);
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onAdd({ name, buyIn: parseFloat(buyIn), value: parseFloat(value), dividend: parseFloat(dividend), quantity: parseInt(quantity) });
      setName('');
      setValue('');
      setDividend('')
      setQuantity('')
      setBuyIn('')
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Stock Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
          BuyIn:
          <input type="number" value={buyIn} onChange={e => setBuyIn(Number(e.target.value))} />
        </label>
        <label>
          Stock Value:
          <input type="number" value={value} onChange={e => setValue(Number(e.target.value))} />
        </label>
        <label>
          Dividend Value:
          <input type="number" value={dividend} onChange={e => setDividend(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </label>
        <button type="submit">Add Stock</button>
      </form>
    );
  }
  
  export default AddStockForm;

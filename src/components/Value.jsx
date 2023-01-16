const Value = ({ portfolio }) => {
  console.log(portfolio);
  const value = portfolio.reduce(
    (acc, stock) => acc + stock.buyIn * stock.quantity,
    0
  );
  const curValue = portfolio.reduce(
    (acc, stock) => acc + stock.value * stock.quantity,
    0
  );
  const divi = portfolio.reduce(
    (acc, stock) => acc + (stock.value * stock.quantity * stock.dividend) / 100,
    0
  );
  return (
    <>
      <div>AusgangsWert: {value.toFixed(2)}</div>
      <div>Current Portfolio Value: {(value + (curValue - value)).toFixed(2)}</div>
      <div>Gewinn/Verlust: {(curValue - value).toFixed(2)}</div>
      <br />
      <div>Total Dividend: {divi.toFixed(2)}</div>
      <div>Current value incls Dividend: {(divi + value + curValue - value).toFixed(2)}</div>
      <div>Gewinn/Verlust inkls Dividend: {(curValue - value + divi).toFixed(2)}</div>
    </>
  );
};

export default Value;

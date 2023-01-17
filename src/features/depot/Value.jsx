const Value = ({ portfolio }) => {
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

  const profitLoss = (curValue - value).toFixed(2);
  let profitLossStyle = "";
  if (profitLoss > 0) {
    profitLossStyle = "profit";
  } else if (profitLoss < 0) {
    profitLossStyle = "loss";
  }
  const profitLossDivi = (curValue - value + divi).toFixed(2);
  let profitLossDiviStyle = "";
  if (profitLossDivi > 0) {
    profitLossDiviStyle = "profit";
  } else if (profitLossDivi < 0) {
    profitLossDiviStyle = "loss";
  }

  return (
    <>
      <div className="value-info">
        <div>Portfolio BuyIn: {value.toFixed(2)}€</div>
        <div>
          Current Portfolio Value: {(value + (curValue - value)).toFixed(2)}€
        </div>
        <div className={profitLossStyle}>Performance: {profitLoss}€</div>
        <br />
        <div>Total Dividend p.A.: {divi.toFixed(2)}€</div>
        <div>
          Current Portfolio Value incl. Dividend:{" "}
          {(divi + value + curValue - value).toFixed(2)}€
        </div>
        <div className={profitLossDiviStyle}>
          Performance incl. Dividend: {profitLossDivi}€
        </div>
      </div>
    </>
  );
};

export default Value;

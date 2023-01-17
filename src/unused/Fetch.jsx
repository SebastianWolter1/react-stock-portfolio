import { useEffect, useState } from "react";
export const url =
"https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=";

export const url2 = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=PSEC&apikey=RTS565C5309SVB57"

export const token = "&apikey=RTS565C5309SVB57"


const Fetch = () => {

const [stocks, setStocks] =useState()

  useEffect(() => {
    const fetchData = async () => {
      
      const result = await fetch(url2);
      const data = await result.json();
      
      setStocks(data);
        };
        fetchData();
      }, []);
      console.log(stocks);

      
      // if(stocks["Time Series (Daily)"] !== undefined) {
        
      //   const monthly = stocks["Time Series (Daily)"]
      //   const stocksValuesList = Object.values(monthly);
      //   console.log(monthly);
      //   console.log(stocksValuesList[0]["4. close"]);
        
      // }
 
      
      


    return ( 

<>
<button>Fetch Me</button>
</>

     );
}
 
export default Fetch;
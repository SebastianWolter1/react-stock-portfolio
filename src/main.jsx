import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import StockContextProvider from "./global/Context";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <StockContextProvider>
    <App/>
  </StockContextProvider>
  </BrowserRouter>
);

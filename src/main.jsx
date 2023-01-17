import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./components/App";
import StockContextProvider from "./global/Context";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
  <StockContextProvider>
    <App/>
  </StockContextProvider>
  </HashRouter>
);

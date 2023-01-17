import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import routes from "./routes/routes";
import "./styles/App.css";

const App = () => {
 

  return (
    <Layout>
      <Routes>
        {routes.map((route) => {
          return <Route key={route.id} {...route} />;
        })}
      </Routes>
    </Layout>
  );
};

export default App;

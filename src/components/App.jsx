import React from "react";
import { Route, Routes } from "react-router-dom";
import "../styles/App.css";
import Layout from "./Layout";
import routes from "./routes";

const App = () => {
 

  return (
    <Layout>
      {/* <Cake/> */}
      <Routes>
        {routes.map((route) => {
          return <Route key={route.id} {...route} />;
        })}
      </Routes>
    </Layout>
  );
};

export default App;

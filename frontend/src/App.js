import React from "react";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./components/Routes";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App;

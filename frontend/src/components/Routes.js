import React from "react";

import { Routes, Route } from "react-router-dom";

import About from "./about/About";
import Convert from "./converter/Convert";

const guest = [
  { path: "/", key: "home", element: About },
  { path: "/convert/:base", key: "home", element: Convert },
];

function AppRoutes() {
  return <Routes>{renderRoutes(guest)}</Routes>;
}

function renderRoutes(routes) {
  return routes.map((url) => (
    <Route
      exact
      path={url.path}
      key={url.key}
      element={<url.element />}
    ></Route>
  ));
}

export default AppRoutes;

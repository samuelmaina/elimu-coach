import React from "react";

import { Routes, Route } from "react-router-dom";
import Convert from "./convertor/Convertor";
import HomePage from "./HomePage";

const guest = [
  { path: "/", key: "home", element: HomePage },
  { path: "/convert/:base", key: "convert", element: Convert },
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

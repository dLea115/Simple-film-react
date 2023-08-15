/* eslint-disable no-undef */
import React from "react";
import { useRoutes } from "react-router-dom";
import Login, { LoginGuard } from "./components/Login";
import MovieList from "./components/MovieList";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/movies",
    element: <MovieList />,
  },
];

const App = () => {
  const elements = useRoutes(routes);
  return <>{elements}</>;
};

export default App;

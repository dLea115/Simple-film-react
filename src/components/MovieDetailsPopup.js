/* eslint-disable no-unreachable */
import React from "react";
import "../styles/popup.css";

const MovieDetailsPopup = (props) => {
  return (
    <div>
      <h2>Name: {props.movie.title}</h2>
      <p>Release Date: {props.movie.releaseDate}</p>
      <p>Description: {props.movie.description}</p>
      <p>Actors: {props.movie.Actors}</p>
    </div>
  );
};

export default MovieDetailsPopup;

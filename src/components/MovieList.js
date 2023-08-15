/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import Popup from "reactjs-popup";
import MovieDetailsPopup from "../components/MovieDetailsPopup";
import { fetchMovies } from "../services/fakeApi"; // Fakeapi import
import "../styles/movielist.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(true);
  const [searchList, setSearchList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearchMatches, setHasSearchMatches] = useState(true);

  useEffect(() => {
    // Taking the information for once
    getMovies();
  }, []);

  // useEffect(() => {
  //   // search filter
  //   if (searchQuery === "") {
  //     // || searchQuery !== "{movies.title}"
  //     getMovies();
  //   } else {
  //     let filteredData = movies?.filter((movie) => {
  //       return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  //     });
  //     if (filteredData.length === 0) {
  //       // if user commit didnt match any
  //       setHasSearchMatches(false);
  //     } else {
  //       setHasSearchMatches(true);
  //       setMovies(filteredData);
  //     }
  //   }
  // }, [movies, searchQuery]);

  useEffect(() => {
    setSearchList(
      searchQuery.length > 0
        ? movies.filter((movie) =>
            movie.title
              .toLocaleUpperCase("tr-TR")
              .includes(searchQuery.toLocaleUpperCase("tr-TR"))
          )
        : movies
    );
  }, [movies, searchQuery]);

  function handleInputChange({ target }) {
    setSearchQuery(target.value);
  }

  const getMovies = async () => {
    // Checking the data
    try {
      const data = fetchMovies();
      setMovies(data);
      searchList(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    getMovies(); // Fetch all movies again
  };

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie-list-container">
      <button className="movie-list-title" onClick={clearSearch}>
        Movie List Page
      </button>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />
      {movies && // mapping the movies and popups
        searchList.map((i) => {
          return (
            <>
              <div key={i.id}>
                <Popup
                  trigger={
                    <input
                      type="image"
                      src={i.imageSrc}
                      alt={i.title}
                      style={{ width: 310, height: 420 }}
                    />
                  }
                  position="right center"
                >
                  <MovieDetailsPopup movie={i} onClose={handleCloseDetails} />
                </Popup>
              </div>

              <Link to={i.imdbLink} target="_blank">
                <p className="alts">{i.title}</p>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default MovieList;

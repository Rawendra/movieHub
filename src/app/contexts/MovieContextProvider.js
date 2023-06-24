import React, { useState, createContext, useContext } from "react";

const MovieContext = createContext();
const MovieContextUpdate = createContext();

export const useMovieContext = () => useContext(MovieContext);
export const useMovieContextUpdate = () => useContext(MovieContextUpdate);

const MovieContextProvider = ({ children }) => {
  const [movieName, setMovieName] = useState("");

  const updateMovie = (movieName) => {
    setMovieName(movieName);
  };

  return (
    <MovieContext.Provider value={movieName}>
      <MovieContextUpdate.Provider value={updateMovie}>
        {" "}
        {children}
      </MovieContextUpdate.Provider>
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;

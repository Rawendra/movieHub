import React, { useEffect, useState } from "react";
import styles from "./Body.css";
import Details from "./Details";
import MovieChart from "./MovieChart";
import { getMovieDetails } from "../../communication/api";
import {
  useMovieContext,
  useMovieContextUpdate,
} from "../../contexts/MovieContextProvider";
import {
  useSortByContext,
  useSortByUpdateContext,
} from "../../contexts/SortByContextProvider";

function Body() {
  const queriedMovie = useMovieContext();
  const sortingParameter = useSortByContext();
  const [movies, updateMovie] = useState([]);
  const movieListUpdate = useMovieContextUpdate();
  const [selectedMovie, setSelectdeMovie] = useState("");

  const handleSelection = (movie) => {
    setSelectdeMovie(movie);
  };

  useEffect(() => {
    getMovieDetails().then((movies) => {
      updateMovie(movies);
    });
  }, []);

  return (
    <div className={styles}>
      <div className="container">
        <div className="item">
          <MovieChart
            sortingParameter={sortingParameter}
            queriedMovie={queriedMovie}
            movies={movies}
            onSelection={handleSelection}
          />{" "}
        </div>
        <div className="item">
          <Details selectedMovie={selectedMovie} />{" "}
        </div>
      </div>
      movie searched: {queriedMovie}
      sortingBy: {sortingParameter}
    </div>
  );
}

export default Body;

import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import {
  useMovieContext,
  useMovieContextUpdate,
} from "../../contexts/MovieContextProvider";

const sortingParameterMap = {
  NAME: "title",
  DATE: "release_date",
  EPISODE: "episode_id",
};
function MovieChart({
  movies,
  onSelection,
  queriedMovie,
  sortingParameter = "",
}) {
  console.log("movie", movies);
  const [moviesList, setMovieList] = useState([]);

  const handleFiltering = () => {
    if (!queriedMovie) {
      console.log("no movie is selected");
      return movies?.results;
    } else {
      console.log("filtering the movie");
      const filteredMovies = movies?.results?.filter((movie) => {
        if (movie.title.toUpperCase().includes(queriedMovie?.toUpperCase())) {
          console.log("movie checking against", queriedMovie, movie);
          return true;
        }
        return false;
      });
      return filteredMovies;
    }
  };

  const handleSorting = (filteredList) => {
    if (
      !filteredList?.length ||
      !sortingParameter ||
      !["NAME", "DATE", "EPISODE"].includes(sortingParameter.toUpperCase())
    ) {
      return filteredList;
    } else {
      const sortedMovieList = filteredList.sort((movie1, movie2) => {
        const value1 =
          movie1[sortingParameterMap[sortingParameter.toUpperCase()]];
        const value2 =
          movie2[sortingParameterMap[sortingParameter.toUpperCase()]];
        console.log(
          movie1[sortingParameterMap[sortingParameter.toUpperCase()]]
        );
        console.log(
          movie2[sortingParameterMap[sortingParameter.toUpperCase()]]
        );
        if (value1 > value2) {
          console.log("returing the value 1");
          return 1;
        } else if (value1 < value2) {
          console.log("returing the value -1");
          return -1;
        } else {
          return 0;
        }
      });

      return sortedMovieList;
    }
  };

  useEffect(() => {
    const filteredList = handleFiltering();
    const sortedMovieList = handleSorting(filteredList) || [];

    setMovieList((prevList) => {
      prevList = [];
      prevList = [...sortedMovieList];
      return prevList;
    });
  }, [queriedMovie, sortingParameter, movies?.results?.length]);

  function handleOnClick({ movie, id }) {
    console.log(movie);
    onSelection(movie);
  }
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Episode</th>
          <th>Title</th>
          <th>Release Date</th>
        </tr>
      </thead>
      <tbody>
        {moviesList?.map((movie, id) => (
          <tr key={movie?.title} onClick={() => handleOnClick({ id, movie })}>
            <td>{movie?.episode_id}</td>
            <td>{movie?.title}</td>

            <td>{movie?.release_date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MovieChart;

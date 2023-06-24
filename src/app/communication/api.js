import axios from "axios";

const MOVIE_URL = "https://swapi.dev/api/films/";
export const getMovieDetails = () => {
  return new Promise((res, rej) => {
    axios
      .get(MOVIE_URL, {
        params: { format: "json" },
      })
      .then((response) => {
        console.log("shjoing the response", response);
        const { data: results } = response;
        res(results);
      });
  });
};

import React from "react";

function Details({ selectedMovie }) {
  const description = selectedMovie ? (
    <div>
      <h2>{selectedMovie.title}</h2>
      <hr />
      {selectedMovie?.opening_crawl}
    </div>
  ) : (
    "Please select a movie to get some description"
  );
  return <div>Details:{description}</div>;
}

export default Details;

import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { searchIcon } from "./icons/searchIcon";
import {
  useMovieContext,
  useMovieContextUpdate,
} from "../contexts/MovieContextProvider";

function SearchBy() {
  let count = 0;
  let lastCount = 0;
  const setMovieSelection = useMovieContextUpdate();
  const handleMovieSearch = ({ target }, count) => {
    console.log(target?.value);
    // if (count - lastCount > 5 || lastCount === 0) {
    //   console.log("okay", count, lastCount);
    // } else {
    //   console.log("its not okay", count, lastCount);
    // }
    // lastCount = count;
    setMovieSelection(target?.value)
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text>Search {searchIcon}</InputGroup.Text>
        <Form.Control
          onChange={(event) => handleMovieSearch(event, count)}
          aria-label="First name"
        />
      </InputGroup>
    </div>
  );
}

export default SearchBy;

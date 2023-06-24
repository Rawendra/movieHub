import React from "react";

import Dropdown from "react-bootstrap/Dropdown";
import {
  useSortByContext,
  useSortByUpdateContext,
} from "../contexts/SortByContextProvider";
function Sortby() {
  const sortOptions = ["name", "date",'episode'];
  const updateSortingParameter = useSortByUpdateContext();

  const handleSelection = (item) => {
    console.log(item);
    updateSortingParameter(item);
  };

  return (
    <div className="flex-item">
      <Dropdown>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          Sort By ..
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {sortOptions.map((optionSelected) => (
            <Dropdown.Item
              key={optionSelected}
              onClick={() => handleSelection(optionSelected)}
            >
              {optionSelected.toUpperCase()}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sortby;

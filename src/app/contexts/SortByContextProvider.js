import React, { useState, createContext, useContext } from "react";

const SortByContext = createContext();
const SortByUpdateContext = createContext();

const SortByContextProvider = ({ children }) => {
  const [sortBy, setSortBy] = useState("");

  const updateSortByParamter = (sortBy) => {
    setSortBy(sortBy);
  };

  return (
    <SortByContext.Provider value={sortBy}>
      <SortByUpdateContext.Provider value={updateSortByParamter}>
        {" "}
        {children}
      </SortByUpdateContext.Provider>
    </SortByContext.Provider>
  );
};

export const useSortByContext = () => useContext(SortByContext);
export const useSortByUpdateContext = () => useContext(SortByUpdateContext);

export default SortByContextProvider;

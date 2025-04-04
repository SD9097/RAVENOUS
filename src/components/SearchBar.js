import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = ({ searchYelp }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const [sortBy, setSortBy] = useState("best_match");

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    searchYelp(term, location, sortBy);
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.sortOptions}>
        <ul>
          <li
            className={sortBy === "best_match" ? styles.active : ""}
            onClick={() => setSortBy("best_match")}
          >
            Best Match
          </li>
          <li
            className={sortBy === "highest_rated" ? styles.active : ""}
            onClick={() => setSortBy("highest_rated")}
          >
            Highest Rated
          </li>
          <li
            className={sortBy === "most_reviewed" ? styles.active : ""}
            onClick={() => setSortBy("most_reviewed")}
          >
            Most Reviewed
          </li>
        </ul>
      </div>
      <div className={styles.searchFields}>
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div className={styles.submit}>
        <button onClick={handleSearch}>Let's Go</button>
      </div>
    </div>
  );
};

export default SearchBar;

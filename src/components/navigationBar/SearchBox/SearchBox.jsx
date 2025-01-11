import { useState } from "react";
import { useNavigationUI } from "../../../contexts/NavigationUIContext";
import { useWeatherAPI } from "../../../contexts/WeatherAPIContext";
import styles from "../NavigationBar.module.css";

function SearchBox() {
  const { setIsNavOpen, isSearchOpen, toggleSearch } = useNavigationUI();
  const { getOpenWeatherDataByCity } = useWeatherAPI();
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      getOpenWeatherDataByCity("/", city);
      getOpenWeatherDataByCity("/forecast", city);
      setIsNavOpen(false);
      toggleSearch();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      {/* Search Icon */}
      <i
        className={
          isSearchOpen
            ? `uil uil-times ${styles.searchIcon}`
            : `uil uil-search ${styles.searchIcon}`
        }
        onClick={() => {
          setIsNavOpen(false);
          toggleSearch();
        }}
      ></i>
      {/* Search Box */}
      <div className={`${styles.searchBox} ${isSearchOpen ? styles.open : ""}`}>
        <i
          className={`uil uil-search ${styles.searchIcon} ${styles.searchBtn}`}
          onClick={handleSearch}
        ></i>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search location..."
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
    </>
  );
}

export default SearchBox;

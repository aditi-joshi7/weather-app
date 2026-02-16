import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Toggles from "./components/Toggles";
import { fetchWeather } from "./api";
import "./style.css";

import Header from "./components/Header";

function App() {
  const [weather, setWeather] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    try {
      const data = await fetchWeather(city);
      setWeather(data);
      setError("");
    } catch {
      setError("City not found!");
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container">
        <SearchBar onSearch={handleSearch} />
        <Toggles
          isCelsius={isCelsius}
          setIsCelsius={setIsCelsius}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          showUnitToggle={!!weather}
        />
        {error && <p className="error">{error}</p>}
        {weather && <WeatherCard weather={weather} isCelsius={isCelsius} />}
      </div>
    </div>
  );
}

export default App;
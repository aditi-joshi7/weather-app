import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Toggles from "./components/Toggles";
import { fetchWeather, fetchForecast } from "./api";
import "./style.css";
import Header from "./components/Header";
import Forecast from "./components/Forecast";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [isCelsius, setIsCelsius] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setError("");
    setWeather(null);
    setForecast(null);
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeather(city),
        fetchForecast(city),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      
      {/* HEADER AT TOP */}
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="search-container">
        <SearchBar onSearch={handleSearch} />
      </div>

      {error && <p className="error">{error}</p>}

      {(weather || forecast) && (
        <div className="weather-container">
          {weather && (
            <>
              <WeatherCard
                weather={weather}
                isCelsius={isCelsius}
                setIsCelsius={setIsCelsius}
              />
            </>
          )}
          {forecast && <Forecast data={forecast} />}
        </div>
      )}
    </div>
  );
}

export default App;
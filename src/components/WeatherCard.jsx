import React from "react";

function WeatherCard({ weather, isCelsius }) {
  const temp = isCelsius
    ? weather.main.temp
    : (weather.main.temp * 9) / 5 + 32;

  return (
    <div className="card">
      <h2>{weather.name}</h2>
      <h1>{temp.toFixed(1)}°{isCelsius ? "C" : "F"}</h1>
      <p>{weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} km/h</p>
    </div>
  );
}

export default WeatherCard;
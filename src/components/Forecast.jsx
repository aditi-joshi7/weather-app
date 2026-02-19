import React from "react";
import "./Forecast.css";

const Forecast = ({ data }) => {
  if (!data || !data.list) {
    return null;
  }

  // Group by day and get the forecast for around midday
  const dailyData = data.list.reduce((acc, item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {});

  const forecastDays = Object.keys(dailyData)
    .slice(1, 6)
    .map((date) => {
      const dayData = dailyData[date].find((d) => d.dt_txt.includes("12:00:00")) || dailyData[date][0];
      return {
        date: new Date(dayData.dt * 1000),
        temp: dayData.main.temp,
      };
    });

  return (
    <div className="forecast-container">
      <h2 className="forecast-title">5-Day Forecast</h2>
      <div className="forecast-days">
        {forecastDays.map((day, index) => (
          <div className="forecast-day" key={index}>
            <p className="forecast-date">{day.date.toLocaleDateString("en-US", { weekday: "short" })}</p>

            <p className="forecast-temp">{Math.round(day.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;

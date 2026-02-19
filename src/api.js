const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

if (!API_KEY) {
  throw new Error(
    "VITE_WEATHER_API_KEY is not set. Please add it to your .env file."
  );
}

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeather = async (city) => {
  const res = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "City not found");
  }
  return res.json();
};

export const fetchForecast = async (city) => {
  const res = await fetch(
    `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || "Could not fetch forecast");
  }
  return res.json();
};

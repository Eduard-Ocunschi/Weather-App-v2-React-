import { createContext, useContext, useState } from "react";
import {
  getCurrentWeatherByCity,
  getForecastByCity,
} from "../services/openWeatherAPI";

const WeatherAPIContext = createContext();

function WeatherAPIProvider({ children }) {
  const [currentWeatherData, setCurrentWeatherData] = useState();
  const [forecastData, setForecastData] = useState();

  const getOpenWeatherDataByCity = async (dataType, city) => {
    try {
      switch (dataType) {
        case "/":
          const weatherData = await getCurrentWeatherByCity(city);
          setCurrentWeatherData(weatherData);
          break;
        case "/forecast":
          const forecastData = await getForecastByCity(city);
          setForecastData(forecastData);
          break;
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <WeatherAPIContext.Provider
      value={{
        getOpenWeatherDataByCity,
        currentWeatherData,
        setCurrentWeatherData,
        forecastData,
        setForecastData,
      }}
    >
      {children}
    </WeatherAPIContext.Provider>
  );
}

function useWeatherAPI() {
  const context = useContext(WeatherAPIContext);
  if (context === undefined)
    throw new Error(
      "WeatherAPIContext was used outside the WeatherAPIProvider"
    );
  return context;
}

export { WeatherAPIProvider, useWeatherAPI };

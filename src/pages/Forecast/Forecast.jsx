import React, { useEffect } from "react";
import { useWeatherAPI } from "../../contexts/WeatherAPIContext";
import ForecastCard from "../../components/forecastCard/ForecastCard";
import styles from "./Forecast.module.css";

const splitForecastListByDate = function (list) {
  console.log("----> splitForecastListByDate");
  const obj = {};
  list.forEach((weatherObj) => {
    const date = weatherObj.dt_txt.split(" ")[0];
    if (obj[date]) {
      obj[date].push(weatherObj);
    } else {
      obj[date] = [weatherObj];
    }
  });
  return obj;
};

function Forecast() {
  const { getOpenWeatherDataByCity, currentWeatherData, forecastData } =
    useWeatherAPI();

  const groupedData = forecastData?.list
    ? splitForecastListByDate(forecastData.list)
    : null;

  useEffect(() => {
    if (currentWeatherData?.name && !forecastData) {
      getOpenWeatherDataByCity("/forecast", currentWeatherData.name);
    }
  }, [currentWeatherData, forecastData, getOpenWeatherDataByCity]);

  if (!groupedData) {
    return <div>Loading...</div>; // De implementat Loading
  }

  return (
    <div className={styles.sectionForecast}>
      {Object.entries(groupedData).map(([date, hourlyForecasts]) => (
        <div className={styles.dateContainer} key={date}>
          <h2 className={styles.dateTitle}>{date}</h2>
          <div className={styles.hourContainer}>
            {hourlyForecasts.map((forecast) => (
              <ForecastCard
                key={forecast.dt}
                time={forecast.dt_txt.split(" ")[1]}
                temp={forecast.main.temp}
                tempMin={forecast.main.temp_min}
                tempMax={forecast.main.temp_max}
                humidity={forecast.main.humidity}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Forecast;

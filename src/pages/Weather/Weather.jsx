import { useEffect } from "react";
import { getGeoLocation } from "../../services/location";
import { getCurrentWeatherByLocation } from "../../services/openWeatherAPI";
import { useWeatherAPI } from "../../contexts/WeatherAPIContext";
import styles from "./Weather.module.css";
import Icons from "../../components/icons/Icons";
import BackgroundVideo from "../../components/background-video/BackgroundVideo";

function Weather() {
  const { currentWeatherData, setCurrentWeatherData } = useWeatherAPI();

  useEffect(() => {
    async function getCurrentWeather() {
      try {
        const location = await getGeoLocation();
        const res = await getCurrentWeatherByLocation(
          location.coords.latitude,
          location.coords.longitude
        );
        setCurrentWeatherData(res);
      } catch (error) {
        console.log(error);
      }
    }
    if (currentWeatherData === undefined) getCurrentWeather();
  }, []);

  return (
    <section className={styles.section}>
      <BackgroundVideo />
      <div className={styles.mainCard}>
        <h1 className={styles.title}>
          <span>Weather in </span>
          <span>{currentWeatherData?.name}</span>
        </h1>
        <Icons />
        <p className={styles.weatherDescription}>
          {currentWeatherData?.weather[0].description
            ? currentWeatherData.weather[0].description
                .charAt(0)
                .toUpperCase() +
              currentWeatherData.weather[0].description.slice(1)
            : ""}
        </p>
        <ul className={styles.infoList}>
          <li>
            <span>Temperature:</span>
            <span>{currentWeatherData?.main.temp} &#8451;</span>
          </li>
          <li>
            <span>Humidity:</span>
            <span>{currentWeatherData?.main.humidity} %</span>
          </li>
          <li>
            <span>Pressure:</span>
            <span>{`${currentWeatherData?.main.pressure} hPa`}</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Weather;

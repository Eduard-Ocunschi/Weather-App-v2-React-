import { useWeatherAPI } from "../../contexts/WeatherAPIContext";
import styles from "./Icons.module.css";

function Icons() {
  const { currentWeatherData } = useWeatherAPI();

  const renderWeatherIcon = (description) => {
    switch (description) {
      case "01d":
      case "01n":
        return (
          <div className={`${styles.icon} ${styles.sunny}`}>
            <div className={styles.sun}>
              <div className={styles.rays}></div>
            </div>
          </div>
        );
      case "02d":
      case "02n":
      case "03d":
      case "03n":
      case "04d":
      case "04n":
      case "50d":
      case "50n":
        return (
          <div className={`${styles.icon} ${styles.cloudy}`}>
            <div className={styles.cloud}></div>
            <div className={styles.cloud}></div>
          </div>
        );
      case "09d":
      case "09n":
        return (
          <div className={`${styles.icon} ${styles.sunShower}`}>
            <div className={styles.cloud}></div>
            <div className={styles.sun}>
              <div className={styles.rays}></div>
            </div>
            <div className={styles.rain}></div>
          </div>
        );
      case "10d":
      case "10n":
        return (
          <div className={`${styles.icon} ${styles.rainy}`}>
            <div className={styles.cloud}></div>
            <div className={styles.rain}></div>
          </div>
        );
      case "11d":
      case "11n":
        return (
          <div className={`${styles.icon} ${styles.thunderStorm}`}>
            <div className={styles.cloud}></div>
            <div className={styles.lightning}>
              <div className={styles.bolt}></div>
              <div className={styles.bolt}></div>
            </div>
          </div>
        );
      case "13d":
      case "13n":
        return (
          <div className={`${styles.icon} ${styles.flurries}`}>
            <div className={styles.cloud}></div>
            <div className={styles.snow}>
              <div className={styles.flake}></div>
              <div className={styles.flake}></div>
            </div>
          </div>
        );
      default:
        return <div>Weather type not recognized.</div>;
    }
  };

  const description = currentWeatherData?.weather?.[0]?.icon || "01d";
  return <>{renderWeatherIcon(description)}</>;
}

export default Icons;

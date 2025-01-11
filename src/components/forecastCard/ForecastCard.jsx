import { useState } from "react";
import styles from "./ForecastCard.module.css";

function ForecastCard({ time, temp, tempMin, tempMax, humidity }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`${styles.forecastCard} ${isFlipped ? styles.flipped : ""}`}
      onClick={handleCardClick}
    >
      <div className={`${styles.cardFace} ${styles.front}`}>
        <h4>{time}</h4>
      </div>
      <div className={`${styles.cardFace} ${styles.back}`}>
        <p>
          <span>Temperature:</span>
          <span>{temp}°C</span>
        </p>
        <p>
          <span>Min Temp: </span>
          <span>{tempMin}°C</span>
        </p>
        <p>
          <span>Max Temp: </span>
          <span>{tempMax}°C</span>
        </p>
        <p>
          <span>Humidity: </span>
          <span>{humidity}%</span>
        </p>
      </div>
    </div>
  );
}

export default ForecastCard;

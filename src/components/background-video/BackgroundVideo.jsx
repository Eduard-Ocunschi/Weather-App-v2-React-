import { useEffect, useState } from "react";
import { useWeatherAPI } from "../../contexts/WeatherAPIContext";
import styles from "./BackgroundVideo.module.css";

const videoSources = {
  "01d": "/media/sun.mp4",
  "01n": "/media/sun.mp4",
  "02d": "/media/cloudy.mp4",
  "02n": "/media/cloudy.mp4",
  "03d": "/media/broken-clouds.mp4",
  "03n": "/media/broken-clouds.mp4",
  "04d": "/media/broken-clouds.mp4",
  "04n": "/media/broken-clouds.mp4",
  "09d": "/media/rain.mp4",
  "09n": "/media/rain.mp4",
  "10d": "/media/rain.mp4",
  "10n": "/media/rain.mp4",
  "11d": "/media/thunderstorm.mp4",
  "11n": "/media/thunderstorm.mp4",
  "13d": "/media/snow.mp4",
  "13n": "/media/snow.mp4",
  "50d": "/media/fog.mp4",
  "50n": "/media/fog.mp4",
};

function BackgroundVideo() {
  const { currentWeatherData } = useWeatherAPI();
  const [videoSource, setVideoSource] = useState("");

  useEffect(() => {
    const iconCode = currentWeatherData?.weather?.[0]?.icon;
    const newVideoSource = videoSources[iconCode] || "";

    if (newVideoSource !== videoSource) {
      setVideoSource(newVideoSource);
    }
  }, [currentWeatherData, videoSource]);

  return (
    <>
      <video
        className={styles.video}
        autoPlay
        loop
        muted
        playsInline
        key={videoSource}
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay}></div>
    </>
  );
}

export default BackgroundVideo;

export const getCurrentWeatherByLocation = async (lat, lon) => {
  console.log("------->getCurrentWeatherByLocation");
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return await res.json();
};

export const getCurrentWeatherByCity = async (city) => {
  console.log("-------> getCurrentWeatherByCity");

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return await res.json();
};

export const getForecastByCity = async (city) => {
  console.log("------>getForecastByCity");

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  );
  return await res.json();
};

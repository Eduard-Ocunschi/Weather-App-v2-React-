export const getGeoLocation = () => {
  console.log("Geolocation function called");
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

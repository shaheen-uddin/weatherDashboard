import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWheather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });

  const [loading, setLoading] = useState({
    state: true,
    message: "",
  });

  const [error, setError] = useState(null);

  const { selectedLocation } = useContext(LocationContext);

  console.log("*****");
  console.log(selectedLocation);
  console.log("*****");

  const fetchWeatherData = async (latitudte, longitude) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data ...",
      });
      // const API_KEY = "c5cb1802037ad9342587dcb2efc2926e";
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitudte}&lon=${longitude}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }&units=metric`;
      //   console.log(url);
      const response = await fetch(url);
      /*    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
            import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
    ); */
      if (!response.ok) {
        const errorMsg = `Fetching weather data failed. ${response.status}`;
        throw new Error(errorMsg);
      }
      const data = await response.json();
      setWeatherData({
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: longitude,
        latitude: latitudte,
      });
    } catch (err) {
      setError(err);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };
  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding location ...",
    });
    if (selectedLocation.latitude && selectedLocation.longitude) {
      //console.log("working");
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
        // console.log(`latitude : ${position.coords.latitude} and logitude : ${position.coords.longitude}`)
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    error,
    loading,
  };
};

export default useWheather;

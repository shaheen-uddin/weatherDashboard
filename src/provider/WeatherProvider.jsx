import { WeatherContext } from "../context";
import { useWheather } from "../hooks";

export default function WeatherProvider({ children }) {
  const { weatherData, loading, error } = useWheather();
  return (
    <WeatherContext.Provider value={{ weatherData, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
}

import { useContext } from "react";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import SnowIcon from "../../assets/icons/snow.svg";
import SunnyIcon from "../../assets/icons/sunny.svg";
import RainIcon from "../../assets/rainy.svg";
import ThunderIcon from "../../assets/thunder.svg";
import PinIcon from "../../assets/pin.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-util";

export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  console.log("TIIIIme: " + getFormattedDate(1707375885, "time", false));

  function getWeatherIcon(climate) {
    console.log("Icon: " + climate);
    switch (climate) {
      case "Rain":
        return RainIcon;
      case "Haze":
        return HazeIcon;
      case "Clouds":
        return CloudIcon;
      case "Clear":
        return SunnyIcon;
      case "Fog":
        return HazeIcon;
      case "Thunder":
        return ThunderIcon;
      case "Snow":
        return SnowIcon;
      case "Mist":
        return HazeIcon;
      default:
        return SunnyIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img
          src={getWeatherIcon(weatherData.climate)}
          alt={weatherData.climate}
        />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.floor(weatherData.temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={PinIcon} />
            <h2 className="text-2xl lg:text-[50px]">{weatherData.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDate(weatherData.time, "time", false)} -
        {getFormattedDate(weatherData.time, "date", false)}
      </p>
    </div>
  );
}

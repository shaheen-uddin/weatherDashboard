import React from "react";
import AddToFavorite from "./AddToFavorite";
import WeatherHeadline from "./WeatherHeadline";
import WeatherCondition from "./WeatherCondition";
import { useWheather } from "../../hooks";

export default function WeatherDashboard() {
   const {weatherData, loading, error} = useWheather();
  console.log(weatherData);
  console.log(loading);
  console.log(error); 
  console.log( import.meta.env.VITE_WEATHER_API_KEY);
  console.log(import.meta.env.VITE_SOME_KEY);
  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddToFavorite />
          <WeatherHeadline />
          <WeatherCondition />
        </div>
      </div>
    </div>
  );
}

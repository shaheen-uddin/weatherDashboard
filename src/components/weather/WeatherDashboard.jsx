import React from "react";
import AddToFavorite from "./AddToFavorite";
import WeatherHeadline from "./WeatherHeadline";
import WeatherCondition from "./WeatherCondition";

export default function WeatherDashboard() {
  return (
    <div class="container">
      <div class="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        <div class="grid md:grid-cols-2 gap-10 md:gap-6">
          <AddToFavorite />
          <WeatherHeadline />
          <WeatherCondition />
        </div>
      </div>
    </div>
  );
}

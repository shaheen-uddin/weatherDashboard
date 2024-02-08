import { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import ReadHeartIcon from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

export default function AddToFavorite() {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoriteContext);
  const [isFavorite, toggleFavorite] = useState(false);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;
  //console.log(latitude, longitude, location);
  //console.log(favorites);

  const handleFavorites = () => {
    const found = favorites.find((favorite) => favorite.location === location);
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    toggleFavorite(!isFavorite);
  };
  // console.log(favorites);

  useEffect(() => {
    const found = favorites.find((favorite) => favorite.location === location);
    toggleFavorite(found);
  }, []);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavorites}
        >
          <span>Add to Favourite</span>
          <img src={isFavorite ? ReadHeartIcon : HeartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}

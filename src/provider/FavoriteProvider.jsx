import React from "react";
import { useLocalStorage } from "../hooks";
import { FavoriteContext } from "../context";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      { latitude: latitude, longitude: longitude, location: location },
    ]);
  };
  const removeFromFavorites = (location) => {
    setFavorites(favorites.filter((favorite) => favorite.location != location));
  };
  //console.log(favorites);
  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;

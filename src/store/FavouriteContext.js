import React, { useEffect, useState } from "react";

const FavouriteContext = React.createContext({
  favourites: [],
  totalFav: 0,
  addToFavourites: item => {},
  removefromFav: item => {},
  isFav: item => {}
});

export const FavouriteContextProvider = ({ children }) => {
  const [fav, setFav] = useState([]);

  useEffect(() => {
    const getFromlocal = localStorage.getItem("fav");
    if (JSON.parse(getFromlocal)) {
      setFav(JSON.parse(getFromlocal));
    } else {
      setFav([]);
    }
  }, []);
  const addToFavourites = item => {
    const newObj = {
      id: item.id,
      title: item.title,
      image: item.image,
      address: item.address,
      description: item.description
    };
    const updateFav = [...fav, newObj];
    console.log(updateFav);
    setFav(updateFav);
    localStorage.setItem("fav", JSON.stringify(updateFav));
  };

  const removefromFav = item => {
    const updateFav = fav.filter(meetup => item.id !== meetup.id);
    setFav(updateFav);
    localStorage.setItem("fav", JSON.stringify(updateFav));
  };

  const isFav = item => {
    return fav.some(meetup => meetup.id === item.id);
  };
  const context = {
    favourites: fav,
    totalFav: fav.length,
    addToFavourites: addToFavourites,
    removefromFav: removefromFav,
    isFav: isFav
  };
  return (
    <FavouriteContext.Provider value={context}>
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteContext;

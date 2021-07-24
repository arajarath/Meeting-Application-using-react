import React, { useContext } from "react";
import Cards from "../ui/Cards";
import classes from "./MeetupItems.module.css";
import FavouriteContext from "../../store/FavouriteContext";

const MeetupItems = ({ item }) => {
  const { title, image, address, description } = item;
  const { content, actions } = classes;

  const favouriteConsumer = useContext(FavouriteContext);

  const isFavourite = favouriteConsumer.isFav(item);

  const addFavouritesHandler = () => {
    if (isFavourite) {
      favouriteConsumer.removefromFav(item);
    } else {
      favouriteConsumer.addToFavourites(item);
    }
  };
  return (
    <li className={classes.item}>
      <Cards>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={actions}>
          <button onClick={addFavouritesHandler}>
            {isFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Cards>
    </li>
  );
};

export default MeetupItems;

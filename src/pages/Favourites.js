import React, { useContext } from "react";
import FavouriteContext from "../store/FavouriteContext";
import MeetupLists from "../components/meetups/MeetupLists";

const Favourites = () => {
  const FavouriteConsumer = useContext(FavouriteContext);

  const favList = FavouriteConsumer.favourites;
  let content;
  if (FavouriteConsumer.totalFav) {
    content = (
      <>
        <h1>All Meetings</h1>
        <MeetupLists data={favList} />
      </>
    );
  } else {
    content = <p>There is no favoutrites in your list. You want to add ?</p>;
  }
  return <>{content}</>;
};

export default Favourites;

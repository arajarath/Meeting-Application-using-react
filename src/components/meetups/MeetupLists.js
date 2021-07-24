import React from "react";
import MeetupItems from "./MeetupItems";
import classes from "./MeetupLists.module.css";

const MeetupLists = ({ data }) => {
  return (
    <ul className={classes.list}>
      {data.map(item => (
        <MeetupItems key={item.id} item={item} id={item.id} />
      ))}
    </ul>
  );
};

export default MeetupLists;

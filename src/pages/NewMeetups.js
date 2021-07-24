import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

const NewMeetups = () => {
  const history = useHistory();
  console.log(history);
  const newMeetupSubmit = newMeetup => {
    fetch("https://netflix-clone-ratz.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(newMeetup),
      headers: {
        content: "application/json"
      }
    }).then(history.replace("/"));
  };
  return (
    <div>
      <NewMeetupForm addNewMeetup={newMeetupSubmit} />
    </div>
  );
};

export default NewMeetups;

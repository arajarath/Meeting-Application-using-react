import React, { useEffect, useState } from "react";
import MeetupLists from "../components/meetups/MeetupLists";

const DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!"
  }
];
const AllMeetups = () => {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://netflix-clone-ratz.firebaseio.com/meetup.json")
      .then(prom => prom.json())
      .then(data => {
        const meetup = [];
        for (const key in data) {
          const meetupObj = {
            id: key,
            ...data[key]
          };
          meetup.push(meetupObj);
        }
        setMeetups(meetup);
      });
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <section>Loading...</section>
      ) : (
        <>
          <h1>All Meetings</h1>
          <MeetupLists data={meetups} />
        </>
      )}
    </div>
  );
};

export default AllMeetups;

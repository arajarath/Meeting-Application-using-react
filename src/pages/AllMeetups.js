import React, { useEffect, useState } from "react";
import MeetupLists from "../components/meetups/MeetupLists";

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
  }, [meetups]);

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

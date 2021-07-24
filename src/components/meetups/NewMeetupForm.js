import React, { useRef } from "react";
import Cards from "../ui/Cards";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = ({ addNewMeetup }) => {
  const { form, control, actions } = classes;
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const submitHandler = e => {
    e.preventDefault();
    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;
    const newMeetup = {
      title: title,
      image: image,
      address: address,
      description: description
    };
    addNewMeetup(newMeetup);
  };
  return (
    <Cards>
      <form className={form} onSubmit={submitHandler}>
        <div className={control}>
          <label htmlFor="title">Meetup Title</label>
          <input ref={titleRef} type="text" id="title" required />
        </div>
        <div className={control}>
          <label htmlFor="image">Meetup Image</label>
          <input ref={imageRef} type="url" id="image" required />
        </div>
        <div className={control}>
          <label htmlFor="address">Meetup Address</label>
          <input ref={addressRef} type="text" id="address" required />
        </div>
        <div className={control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            ref={descriptionRef}
            id="description"
            row="5"
            required
          ></textarea>
        </div>
        <div className={actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Cards>
  );
};

export default NewMeetupForm;

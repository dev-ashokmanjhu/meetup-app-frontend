import React from "react";
import classes from "./MeetupDetails.module.css";
const MeetupDetails = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <h2>{props.address}</h2>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetails;

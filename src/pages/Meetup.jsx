import React, { useEffect, useState } from "react";
import MeetupDetails from "../components/meetups/MeetupDetails";
import axios from "axios";
import { useParams } from "react-router-dom";

const Meetup = () => {
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://meetup-app-backend.vercel.app/api/data/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <MeetupDetails
      image={data.image}
      title={data.title}
      address={data.address}
      description={data.description}
    />
  );
};

export default Meetup;

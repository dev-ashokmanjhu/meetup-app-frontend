// import Image from "next/image";
import MeetupList from "../components/meetups/MeetupList";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";
import LoadingSpinner from "../components/Loader/loader";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://meetup-app-backend.vercel.app/api/data")
      .then((res) => {
        setData(res.data.reverse());
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return loading ? <LoadingSpinner /> : <MeetupList meetups={data} />;
}

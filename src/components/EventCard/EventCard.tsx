import React from "react";
import { Event } from "../../types";
import HeartIconEmpty from "../Icons/HeartIconEmpty";
import HeartIconFilled from "../Icons/HeartIconFilled";
import styles from "./EventCard.module.css";

type EventCardProps = {
  content: Event;
  liked: boolean;
  onClick?: () => void;
};

export default function EventCard({
  content,
  liked,
  onClick,
}: EventCardProps): JSX.Element {
  const { image, title, startDate, time, location, fee } = content;

  const dateObject = new Date(startDate);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const eventDate = dateObject.toLocaleDateString("de-DE", options);

  return (
    <article className={styles.container}>
      <img
        className={styles.img}
        src={
          image == null
            ? "https://images.unsplash.com/photo-1543145480-b8d11d3581a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80"
            : image
        }
        alt=""
      />
      <h2 className={styles.eventName}>{title}</h2>
      <p>{eventDate}</p>
      <p>{time}</p>
      <p>{location}</p>
      <p>{fee}</p>
      <button className={styles.button} onClick={onClick}>
        {liked ? <HeartIconFilled /> : <HeartIconEmpty />}
      </button>
    </article>
  );
}

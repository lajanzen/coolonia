import React from "react";
import { Event } from "../../types";
import HeartIconEmpty from "../Icons/HeartIconEmpty";
import HeartIconFilled from "../Icons/HeartIconFilled";
import styles from "./EventCard.module.css";
import CologneImage from "../../assets/cgn-cathedral.jpeg";

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
        src={image == null ? CologneImage : image}
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

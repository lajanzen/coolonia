import React from "react";
import HeartIconEmpty from "../Icons/HeartIconEmpty";
import HeartIconFilled from "../Icons/HeartIconFilled";
import styles from "./EventCard.module.css";

type EventCardProps = {
  imgSrc: string;
  name: string;
  date: string;
  time: string;
  location: string;
  price: string;
  liked: boolean;
  onClick: () => void;
};

export default function EventCard({
  imgSrc,
  name,
  date,
  time,
  location,
  price,
  liked,
  onClick,
}: EventCardProps): JSX.Element {
  const dateObject = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const eventDate = dateObject.toLocaleDateString("de-DE", options);

  return (
    <article className={styles.container}>
      <img className={styles.img} src={imgSrc} alt="" />
      <h2 className={styles.eventName}>{name}</h2>
      <p>
        <span>{eventDate}</span> ◦ <span>{time}</span>
      </p>
      <p>{location}</p>
      <p>{price}</p>
      <button className={styles.button} onClick={onClick}>
        {liked ? <HeartIconFilled /> : <HeartIconEmpty />}
      </button>
    </article>
  );
}

import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import LogoSmall from "../../components/Icons/LogoSmall";
import Tag from "../../components/Tag/Tag";
import { Event } from "../../types";
import styles from "./Events.module.css";

const days = [
  {
    name: "heute",
    value: "today",
  },
  {
    name: "Di",
    value: "tuesday",
  },
  {
    name: "Mi",
    value: "wednesday",
  },
  {
    name: "Do",
    value: "thursday",
  },
  {
    name: "Fr",
    value: "friday",
  },
  {
    name: "Sa",
    value: "saturday",
  },
  {
    name: "So",
    value: "sunday",
  },
];

export default function Events() {
  const [isLiked, setIsLiked] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/api/events")
      .then((response) => response.json())
      .then((events) => setEvents(events));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.events}>
        <div className={styles.tags}>
          {days.map((day) => (
            <Tag
              tagName={day.name}
              value={day.value}
              name="days"
              key={day.name}
            />
          ))}
        </div>
        {events.map((event: Event) => (
          <EventCard
            content={event}
            key={event.link}
            liked={isLiked}
            onClick={() => setIsLiked(!isLiked)}
          />
        ))}
      </div>
      <LogoSmall className={styles.logo} />
    </div>
  );
}

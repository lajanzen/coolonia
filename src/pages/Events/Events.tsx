import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import LogoSmall from "../../components/Icons/LogoSmall";
import { Event } from "../../types";

import styles from "./Events.module.css";

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
        {events.map((event: Event) => (
          <EventCard
            imgSrc={
              event.image == null
                ? "https://images.unsplash.com/photo-1543145480-b8d11d3581a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80"
                : event.image
            }
            name={event.title}
            date={event.startDate}
            time={event.time}
            location={event.location}
            price={event.fee}
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

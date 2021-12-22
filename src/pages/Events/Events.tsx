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

import React, { useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import LogoSmall from "../../components/Icons/LogoSmall";

import styles from "./Events.module.css";

export default function Events() {
  const [isLiked, setIsLiked] = useState(false);

  const events = [
    {
      imgSrc:
        "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
      name: "Flohmarkt am Heumarkt",
      date: "2021-12-12",
      time: "11 bis 16 Uhr",
      location: "Heumarkt",
      price: "Kostenlos",
      liked: true,
      onClick: () => setIsLiked(!isLiked),
    },
    {
      imgSrc:
        "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
      name: "Stadtteilbibliothek Mülheim - Gaming / E-Sports",
      date: "2021-12-12",
      time: "16 bis 18 Uhr",
      location: "Stadtteilbibliothek Mülheim",
      price: "Kostenlos",
      liked: false,
      onClick: () => setIsLiked(!isLiked),
    },
    {
      imgSrc:
        "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
      name: "Orange Days: Podiumsdiskussion zum Thema Femizid",
      date: "2021-12-12",
      time: "11 bis 16 Uhr",
      location: "Bogen 2",
      price: "Kostenlos",
      liked: true,
      onClick: () => setIsLiked(!isLiked),
    },
    {
      imgSrc:
        "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
      name: "Flohmarkt am Heumarkt",
      date: "2021-12-12",
      time: "11 bis 16 Uhr",
      location: "Heumarkt",
      price: "Kostenlos",
      liked: true,
      onClick: () => setIsLiked(!isLiked),
    },
    {
      imgSrc:
        "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
      name: "Stadtteilbibliothek Mülheim - Gaming / E-Sports",
      date: "2021-12-12",
      time: "16 bis 18 Uhr",
      location: "Stadtteilbibliothek Mülheim",
      price: "Kostenlos",
      liked: false,
      onClick: () => setIsLiked(!isLiked),
    },
    {
      imgSrc:
        "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
      name: "Orange Days: Podiumsdiskussion zum Thema Femizid",
      date: "2021-12-12",
      time: "11 bis 16 Uhr",
      location: "Bogen 2",
      price: "Kostenlos",
      liked: true,
      onClick: () => setIsLiked(!isLiked),
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.events}>
        {events.map((event) => (
          <EventCard
            imgSrc={event.imgSrc}
            name={event.name}
            date={event.date}
            time={event.time}
            location={event.location}
            price={event.price}
            liked={event.liked}
            onClick={event.onClick}
            key={event.name}
          />
        ))}
      </div>
      <div className={styles.logo}>
        <LogoSmall />
      </div>
    </div>
  );
}

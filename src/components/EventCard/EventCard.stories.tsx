import React from "react";
import EventCard from "./EventCard";

export default {
  title: "Component/EventCard",
  component: EventCard,
};

export const Liked = (): JSX.Element => (
  <EventCard
    imgSrc="https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg"
    name="Flohmarkt am Heumarkt"
    date="2021-12-12"
    time="11 bis 16 Uhr"
    location="Heumarkt"
    price="Kostenlos"
    liked={true}
    onClick={() => console.log("liked")}
  />
);

export const NotLiked = (): JSX.Element => (
  <EventCard
    imgSrc="https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg"
    name="Flohmarkt am Heumarkt"
    date="2021-12-12"
    time="11 bis 16 Uhr"
    location="Heumarkt"
    price="Kostenlos"
    liked={false}
    onClick={() => console.log("liked")}
  />
);

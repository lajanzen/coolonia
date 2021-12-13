import React from "react";
import EventCard from "./EventCard";

export default {
  title: "Component/EventCard",
  component: EventCard,
};

const exampleEventLiked = {
  image:
    "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
  title: "Flohmarkt am Heumarkt",
  startDate: "2021-12-12",
  time: "11 bis 16 Uhr",
  location: "Heumarkt",
  fee: "Kostenlos",
  link: "example",
  endDate: "example",
  description: "example",
  zip: 123,
  city: "example",
  district: "example",
  area: "example",
  street: "example",
  streetNumber: 123,
  transportation: "example",
  latitude: 123,
  longitude: 123,
};

const exampleEventNotLiked = {
  image:
    "https://mobil.ksta.de/image/25684552/2x1/600/300/f6b5575094f8698991e7455e5a22460b/my/flohmarkt-symbolimagolem50254643h.jpg",
  title: "Flohmarkt am Heumarkt",
  startDate: "2021-12-12",
  time: "11 bis 16 Uhr",
  location: "Heumarkt",
  fee: "Kostenlos",
  link: "example",
  endDate: "example",
  description: "example",
  zip: 123,
  city: "example",
  district: "example",
  area: "example",
  street: "example",
  streetNumber: 123,
  transportation: "example",
  latitude: 123,
  longitude: 123,
};

export const Liked = (): JSX.Element => (
  <EventCard
    content={exampleEventLiked}
    liked={true}
    onClick={() => console.log("liked")}
  />
);

export const NotLiked = (): JSX.Element => (
  <EventCard
    content={exampleEventNotLiked}
    liked={false}
    onClick={() => console.log("liked")}
  />
);

import fetch from "node-fetch";

type Event = {
  link: string;
  beginndatum: string;
  endedatum: string;
  title: string;
  description: string;
  teaserbild: string;
  uhrzeit: string;
  veranstaltungsort: string;
  plz: string;
  ort: string;
  stadtbezirk: string;
  stadtteil: string;
  strasse: string;
  hausnummer: string;
  oepnv: string;
  latitude: string;
  longitude: string;
  preis: string;
};

export async function fetchEvents() {
  const results = await fetch(
    "https://www.stadt-koeln.de/externe-dienste/open-data/events-od.php"
  );
  const data = await results.json();
  const events = data.items.map((event: Event) => ({
    link: event.link,
    startDate: event.beginndatum,
    endDate: event.endedatum,
    title: event.title,
    description: event.description,
    image: event.teaserbild && `https://www.stadt-koeln.de/${event.teaserbild}`,
    time: event.uhrzeit,
    location: event.veranstaltungsort,
    zip: Number(event.plz),
    city: event.ort,
    district: event.stadtbezirk,
    area: event.stadtteil,
    street: event.strasse,
    streetNumber: Number(event.hausnummer),
    transportation: event.oepnv,
    latitude: Number(event.latitude),
    longitude: Number(event.longitude),
    fee: event.preis,
  }));
  return events;
}

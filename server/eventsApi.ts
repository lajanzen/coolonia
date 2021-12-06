import fetch from "node-fetch";

export async function fetchEvents() {
  const results = await fetch(
    "https://www.stadt-koeln.de/externe-dienste/open-data/events-od.php"
  );
  const data = await results.json();
  const events = data.items;
  return events;
}

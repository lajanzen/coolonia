import express from "express";
import { fetchEvents } from "./eventsApi";

const router = express.Router();

router.get("/events", async (_req, res) => {
  try {
    const events = await fetchEvents();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send("API could not be fetched");
  }
});

export default router;

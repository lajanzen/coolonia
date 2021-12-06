import express from "express";
import path from "path";
import cors from "cors";
import router from "./routes";

const port = process.env.PORT || 3001;
const app = express();

app.use("/api", router);

// Allows access to the server from anywhere
app.use(cors({ origin: "*" }));

app.get("/api/hello", (_request, response) => {
  response.json({ message: "Hello from server" });
});

// Serve production bundle
app.use(express.static("dist"));

// Handle client routing, return all requests to the app
app.get("*", (_request, response) => {
  response.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

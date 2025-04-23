import express from "express";
import cors from "cors";
import route from "./routes/route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(route);

// Tambahkan ini
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(5000, () => console.log("Server up and running...."));
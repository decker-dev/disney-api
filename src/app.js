import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import characterRoutes from "./routes/character.routes.js";
const app = express();
require("./database/database");

app.set("pkg", pkg);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
  });
});
app.use("/character", characterRoutes);

export default app;

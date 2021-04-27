import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import characterRoutes from "./routes/character.routes.js";
import filmRoutes from "./routes/films.routes.js";
import authrRoutes from "./routes/auth.routes.js";
import { success, error } from "./utils/response";
import {checkToken} from "./middleware/checkToken"
const app = express();
require('dotenv').config()
require("./database/database");

app.set("pkg", pkg);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  success(
    req,
    res,
    {
      name: app.get("pkg").name,
      author: app.get("pkg").author,
      description: app.get("pkg").description,
      version: app.get("pkg").version,
    },
    200
  );
});
app.use("/character", characterRoutes);
app.use("/auth", authrRoutes);
app.use("/films", filmRoutes);
export default app;

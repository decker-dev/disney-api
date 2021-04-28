import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
import characterRoutes from "./routes/character.routes.js";
import filmRoutes from "./routes/films.routes.js";
import authrRoutes from "./routes/auth.routes.js";
import { success, error } from "./utils/response";
import {checkToken} from "./middleware/checkToken";
const swaggerUi = require('swagger-ui-express');
import cors from "cors";
const swaggerDocument = require('./swagger.json');
const app = express();
app.use(cors(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
      "Allow-Control-Allow-Header",
      "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})
require('dotenv').config()
require("./database/database");
var options = {
  explorer: true
};
app.set("pkg", pkg);
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
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
      docs: app.get("pkg").docs,
    },
    200
  );
});
app.use("/character", checkToken,characterRoutes);
app.use("/auth", authrRoutes);
app.use("/films",checkToken ,filmRoutes);
export default app;

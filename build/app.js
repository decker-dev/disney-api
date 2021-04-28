"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _package = _interopRequireDefault(require("../package.json"));

var _characterRoutes = _interopRequireDefault(require("./routes/character.routes.js"));

var _filmsRoutes = _interopRequireDefault(require("./routes/films.routes.js"));

var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));

var _response = require("./utils/response");

var _checkToken = require("./middleware/checkToken");

var _cors = _interopRequireDefault(require("cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var swaggerUi = require('swagger-ui-express');

var swaggerDocument = require('./swagger.json');

var app = (0, _express.default)();
app.use((0, _cors.default)(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Allow-Control-Allow-Header", "Origin,X-Requested-With,Content-Type,Accept");
  next();
});

require('dotenv').config();

require("./database/database");

var options = {
  explorer: true
};
app.set("pkg", _package.default);
app.use(_express.default.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use((0, _morgan.default)("dev"));
app.get("/", (req, res) => {
  (0, _response.success)(req, res, {
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version,
    docs: app.get("pkg").docs
  }, 200);
});
app.use("/character", _checkToken.checkToken, _characterRoutes.default);
app.use("/auth", _authRoutes.default);
app.use("/films", _checkToken.checkToken, _filmsRoutes.default);
var _default = app;
exports.default = _default;
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();

require('dotenv').config();

require("./database/database");

app.set("pkg", _package.default);
app.use(_express.default.json());
app.use((0, _morgan.default)("dev"));
app.get("/", (req, res) => {
  (0, _response.success)(req, res, {
    name: app.get("pkg").name,
    author: app.get("pkg").author,
    description: app.get("pkg").description,
    version: app.get("pkg").version
  }, 200);
});
app.use("/character", _checkToken.checkToken, _characterRoutes.default);
app.use("/auth", _authRoutes.default);
app.use("/films", _checkToken.checkToken, _filmsRoutes.default);
var _default = app;
exports.default = _default;
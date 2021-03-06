"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var filmCtrls = _interopRequireWildcard(require("../controller/films.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get("/", filmCtrls.getFilms);
router.get("/:id", filmCtrls.getFilmById);
router.get("/search/:title", filmCtrls.searchTitle);
router.get("/genre/:genre", filmCtrls.searchWithGenre);
router.get("/order/:test", filmCtrls.orderFilms);
router.post("/", filmCtrls.createFilm);
router.put("/:id", filmCtrls.updateFilmById);
router.delete("/:id", filmCtrls.deleteFilmById);
var _default = router;
exports.default = _default;
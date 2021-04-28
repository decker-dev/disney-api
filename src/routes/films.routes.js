import { Router } from "express";
import * as filmCtrls from "../controller/films.controller";
const router = Router();

router.get("/", filmCtrls.getFilms);
router.get("/:id", filmCtrls.getFilmById);
router.get("/search/:title", filmCtrls.searchTitle);
router.get("/genre/:genre", filmCtrls.searchWithGenre);
router.get("/order/:test", filmCtrls.orderFilms);
router.post("/", filmCtrls.createFilm);
router.put("/:id", filmCtrls.updateFilmById);
router.delete("/:id", filmCtrls.deleteFilmById);

export default router;

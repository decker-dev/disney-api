import { Router } from "express";
import * as filmCtrls from "../controller/films.controller";
const router = Router();

router.get("/", filmCtrls.getFilms);
router.get("/:id", filmCtrls.getFilmById);
router.post("/", filmCtrls.createFilm);
router.put("/:id", filmCtrls.updateFilmById);
router.delete("/:id", filmCtrls.deleteFilmById);

export default router;

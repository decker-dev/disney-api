import { Router } from "express";
import * as characterCtrls from "../controller/character.controller";
const router = Router();

router.get("/", characterCtrls.getCharacter);
router.get("/filter", characterCtrls.filterCharacter);
router.get("/:id", characterCtrls.getCharacterById);
router.get("/search/:name", characterCtrls.searchNameCharacter);
router.post("/", characterCtrls.createCharacter);
router.put("/:id", characterCtrls.updateCharacterById);
router.delete("/:id", characterCtrls.deleteCharacterById);

export default router;

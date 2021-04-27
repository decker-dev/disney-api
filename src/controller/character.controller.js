import { Character } from "../database/database";
import { success, error } from "../utils/response";
export const getCharacter = async (req, res) => {
  const character = await Character.findAll({
    attributes: ["name", "picture"],
  });
  success(req, res, character, 200);
};
export const getCharacterById = async (req, res) => {
  const character = await Character.findAll({
    where: { id: req.params.id },
  });
  success(req, res, character, 200);
};
export const createCharacter = async (req, res) => {
  await Character.create(req.body);
  success(req, res, "Se agrego el personaje", 200);
};
export const updateCharacterById = async (req, res) => {
  await Character.update(req.body, {
    where: { id: req.params.id },
  });
  success(req, res, "Se actualizo el personaje", 200);
};
export const deleteCharacterById = async (req, res) => {
  await Character.destroy({
    where: { id: req.params.id },
  });
  success(req, res, "Se ha borrado el personaje", 200);
};

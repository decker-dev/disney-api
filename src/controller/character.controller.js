import { Character } from "../database/database";
import {success,error} from "../utils/response"
export const getCharacter = async (req, res) => {
  const character = await Character.findAll({
      attributes:['name','picture']
  });
  res.json(character);
};
export const getCharacterById = async (req, res) => {
  const character = await Character.findAll({
    where: { id: req.params.id },
  });
  res.json(character);
};
export const createCharacter = async (req, res) => {
  await Character.create(req.body);
  res.status(200).json({
    message: "Se a creado el usuario",
  });
};
export const updateCharacterById = async (req, res) => {
  await Character.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(200).json({
    message: "Se actualizo el usuario",
  });
};
export const deleteCharacterById = async (req, res) => {
  await Character.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: "Se ha borrado el personaje",
  });
};

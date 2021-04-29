import { Character, Film } from "../database/database";
import { success, error } from "../utils/response";
export const getCharacter = async (req, res) => {
  const character = await Character.findAll({
    attributes: ["name", "picture"],
  });
  success(req, res, character, 200);
};
export const getCharacterById = async (req, res) => {
  Character.findByPk(req.params.id).then((character) => {
    character.getFilms().then((film) => {
      success(req, res, { character, film }, 200);
    });
  });
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
export const filterCharacter = async (req, res) => {
/*
  const todo= await Character.findAll({ include: Film })
  res.json(todo)
  Left join
  */
  const { edad, peso, peliculas } = req.query;
  let paramsC = {}
  if(edad)
  paramsC['age'] = edad;
  if(peso)
  paramsC['weight'] = peso;
  let paramsF = {}
  if(peliculas)
  paramsF['title'] = peliculas;
  const character= await Character.findAll({
    include: [{
      model: Film,
      required: true,
      where: paramsF
     }],
     where: paramsC
    })
  if (Object.entries(character).length === 0) {
    error(req, res, "No hay Personaje que cumplan con ese filtro", 404);
  } else {
    success(req, res, character, 200);
  }

};

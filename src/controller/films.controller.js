import { Film } from "../database/database";
import {success,error} from "../utils/response"
export const getFilms = async (req, res) => {
  const film = await Film.findAll({
      attributes:['title','picture','title']
  });
  success(req, res , film,200)
};
export const getFilmById = async (req, res) => {
  const film = await Film.findAll({
    where: { id: req.params.id },
  });
  success(req, res , film,200)
};
export const createFilm = async (req, res) => {
  await Film.create(req.body);
  success(req, res , "Se a creado el usuario",200)
};
export const updateFilmById = async (req, res) => {
  await Film.update(req.body, {
    where: { id: req.params.id },
  });
  success(req, res , "Se actualizo el usuario",200)

};
export const deleteFilmById = async (req, res) => {
  await Film.destroy({
    where: { id: req.params.id },
  });
  success(req, res , "Se ha borrado el personaje",200)
};

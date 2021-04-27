import { Film,Character } from "../database/database";
import {success,error} from "../utils/response"
export const getFilms = async (req, res) => {
  const film = await Film.findAll({
      attributes:['title','picture','title']
  });
  success(req, res , film,200)
};
export const getFilmById = async (req, res) => {
  
  Film.findByPk(req.params.id).then(film => {
    film.getCharacters({ attributes: ['picture', 'name','age','weight','history'] }).then(character => {
      success(req, res, {film,character}, 200);
    })
});
};
export const createFilm = async (req, res) => {
  await Film.create(req.body);
  success(req, res , "Se creo la pelicula",200)
};
export const updateFilmById = async (req, res) => {
  await Film.update(req.body, {
    where: { id: req.params.id },
  });
  success(req, res , "Se actualizo la pelicula",200)

};
export const deleteFilmById = async (req, res) => {
  await Film.destroy({
    where: { id: req.params.id },
  });
  success(req, res , "Se borro la pelicula",200)
};
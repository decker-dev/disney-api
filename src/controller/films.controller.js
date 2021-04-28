import { Film, Character } from "../database/database";
import { success, error } from "../utils/response";
export const getFilms = async (req, res) => {
  const film = await Film.findAll({
    attributes: ["title", "picture", "title"],
  });
  success(req, res, film, 200);
};
export const getFilmById = async (req, res) => {

  Film.findByPk(req.params.id).then((film) => {
    film
      .getCharacters({
        attributes: ["picture", "name", "age", "weight", "history"],
      })
      .then((character) => {
        success(req, res, { film, character }, 200);
      }).catch((err) => {
        error(req, res, "La id que envio no es valida", 400);
      });
  }).catch((err) => {
    error(req, res, "La id que envio no es un numero o no es valida", 400);
  });
};
export const createFilm = async (req, res) => {
  await Film.create(req.body);
  success(req, res, "Se creo una Pelicula/Serie", 200);
};
export const updateFilmById = async (req, res) => {
  await Film.update(req.body, {
    where: { id: req.params.id },
  });
  success(req, res, "Se actualizo una Pelicula/Serie", 200);
};
export const deleteFilmById = async (req, res) => {
  await Film.destroy({
    where: { id: req.params.id },
  });
  success(req, res, "Se borro una Pelicula/Serie", 200);
};
export const searchTitle = async (req, res) => {
  const film = await Film.findAll({
    where: { title: req.params.title },
  });
  if (Object.entries(film).length === 0) {
    error(req, res, "No hay peliculas o series con este titulo", 404);
  } else {
    success(req, res, film, 200);
  }
};
export const searchWithGenre = async (req, res) => {
  const film = await Film.findAll({
    where: { genre: req.params.genre },
  });
  if (Object.entries(film).length === 0) {
    error(req, res, "No hay peliculas de ese genero", 404);
  } else {
    success(req, res, film, 200);
  }
};
export const orderFilms = async (req, res) => {
  switch (req.params.test){
    case "asc":
      const filmasc = await Film.findAll({
        order: [
          ['id', 'ASC'],
      ],});
      success(req, res, filmasc, 200);
    break;
    case "desc":
      const filmdesc = await Film.findAll({
        order: [
          ['id', 'DESC'],
      ],});
      success(req, res, filmdesc, 200);
    break;
    default:
      error(req, res, "El orden que elegio es incorrecto use asc o desc", 400);
  }

};

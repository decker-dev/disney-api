"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderFilms = exports.searchWithGenre = exports.searchTitle = exports.deleteFilmById = exports.updateFilmById = exports.createFilm = exports.getFilmById = exports.getFilms = void 0;

var _database = require("../database/database");

var _response = require("../utils/response");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getFilms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var film = yield _database.Film.findAll({
      attributes: ["title", "picture", "title"]
    });
    (0, _response.success)(req, res, film, 200);
  });

  return function getFilms(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getFilms = getFilms;

var getFilmById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    _database.Film.findByPk(req.params.id).then(film => {
      film.getCharacters({
        attributes: ["picture", "name", "age", "weight", "history"]
      }).then(character => {
        (0, _response.success)(req, res, {
          film,
          character
        }, 200);
      }).catch(err => {
        (0, _response.error)(req, res, "La id que envio no es valida", 400);
      });
    }).catch(err => {
      (0, _response.error)(req, res, "La id que envio no es un numero o no es valida", 400);
    });
  });

  return function getFilmById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getFilmById = getFilmById;

var createFilm = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    yield _database.Film.create(req.body);
    (0, _response.success)(req, res, "Se creo una Pelicula/Serie", 200);
  });

  return function createFilm(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createFilm = createFilm;

var updateFilmById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    yield _database.Film.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    (0, _response.success)(req, res, "Se actualizo una Pelicula/Serie", 200);
  });

  return function updateFilmById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateFilmById = updateFilmById;

var deleteFilmById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    yield _database.Film.destroy({
      where: {
        id: req.params.id
      }
    });
    (0, _response.success)(req, res, "Se borro una Pelicula/Serie", 200);
  });

  return function deleteFilmById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteFilmById = deleteFilmById;

var searchTitle = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    var film = yield _database.Film.findAll({
      where: {
        title: req.params.title
      }
    });

    if (Object.entries(film).length === 0) {
      (0, _response.error)(req, res, "No hay peliculas o series con este titulo", 404);
    } else {
      (0, _response.success)(req, res, film, 200);
    }
  });

  return function searchTitle(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.searchTitle = searchTitle;

var searchWithGenre = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    var film = yield _database.Film.findAll({
      where: {
        genre: req.params.genre
      }
    });

    if (Object.entries(film).length === 0) {
      (0, _response.error)(req, res, "No hay peliculas de ese genero", 404);
    } else {
      (0, _response.success)(req, res, film, 200);
    }
  });

  return function searchWithGenre(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.searchWithGenre = searchWithGenre;

var orderFilms = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(function* (req, res) {
    switch (req.params.test) {
      case "asc":
        var filmasc = yield _database.Film.findAll({
          order: [['id', 'ASC']]
        });
        (0, _response.success)(req, res, filmasc, 200);
        break;

      case "desc":
        var filmdesc = yield _database.Film.findAll({
          order: [['id', 'DESC']]
        });
        (0, _response.success)(req, res, filmdesc, 200);
        break;

      default:
        (0, _response.error)(req, res, "El orden que elegio es incorrecto use asc o desc", 400);
    }
  });

  return function orderFilms(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.orderFilms = orderFilms;
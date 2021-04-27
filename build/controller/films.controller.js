"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFilmById = exports.updateFilmById = exports.createFilm = exports.getFilmById = exports.getFilms = void 0;

var _database = require("../database/database");

var _response = require("../utils/response");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getFilms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var film = yield _database.Film.findAll({
      attributes: ['title', 'picture', 'title']
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
        attributes: ['picture', 'name', 'age', 'weight', 'history']
      }).then(character => {
        (0, _response.success)(req, res, {
          film,
          character
        }, 200);
      });
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
    (0, _response.success)(req, res, "Se creo la pelicula", 200);
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
    (0, _response.success)(req, res, "Se actualizo la pelicula", 200);
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
    (0, _response.success)(req, res, "Se borro la pelicula", 200);
  });

  return function deleteFilmById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteFilmById = deleteFilmById;
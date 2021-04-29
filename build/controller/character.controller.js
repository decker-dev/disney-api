"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchNameCharacter = exports.filterCharacter = exports.deleteCharacterById = exports.updateCharacterById = exports.createCharacter = exports.getCharacterById = exports.getCharacter = void 0;

var _database = require("../database/database");

var _response = require("../utils/response");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getCharacter = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var character = yield _database.Character.findAll({
      attributes: ["name", "picture"]
    });
    (0, _response.success)(req, res, character, 200);
  });

  return function getCharacter(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getCharacter = getCharacter;

var getCharacterById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    _database.Character.findByPk(req.params.id).then(character => {
      character.getFilms().then(film => {
        (0, _response.success)(req, res, {
          character,
          film
        }, 200);
      });
    });
  });

  return function getCharacterById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getCharacterById = getCharacterById;

var createCharacter = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    yield _database.Character.create(req.body);
    (0, _response.success)(req, res, "Se agrego el personaje", 200);
  });

  return function createCharacter(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.createCharacter = createCharacter;

var updateCharacterById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(function* (req, res) {
    yield _database.Character.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    (0, _response.success)(req, res, "Se actualizo el personaje", 200);
  });

  return function updateCharacterById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.updateCharacterById = updateCharacterById;

var deleteCharacterById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    yield _database.Character.destroy({
      where: {
        id: req.params.id
      }
    });
    (0, _response.success)(req, res, "Se ha borrado el personaje", 200);
  });

  return function deleteCharacterById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.deleteCharacterById = deleteCharacterById;

var filterCharacter = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(function* (req, res) {
    var {
      edad,
      peso,
      peliculas
    } = req.query;
    var paramsC = {};
    if (edad) paramsC['age'] = edad;
    if (peso) paramsC['weight'] = peso;
    var paramsF = {};
    if (peliculas) paramsF['title'] = peliculas;
    var character = yield _database.Character.findAll({
      include: [{
        model: _database.Film,
        required: true,
        where: paramsF
      }],
      where: paramsC
    });

    if (Object.entries(character).length === 0) {
      (0, _response.error)(req, res, "No hay Personaje que cumplan con ese filtro", 404);
    } else {
      (0, _response.success)(req, res, character, 200);
    }
  });

  return function filterCharacter(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.filterCharacter = filterCharacter;

var searchNameCharacter = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    var character = yield _database.Character.findAll({
      where: {
        name: req.params.name
      }
    });

    if (Object.entries(character).length === 0) {
      (0, _response.error)(req, res, "No hay personajes con ese nombre", 404);
    } else {
      (0, _response.success)(req, res, character, 200);
    }
  });

  return function searchNameCharacter(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.searchNameCharacter = searchNameCharacter;
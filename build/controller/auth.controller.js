"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.register = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _expressValidator = require("express-validator");

var _database = require("../database/database");

var _response = require("../utils/response");

var _moment = _interopRequireDefault(require("moment"));

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('dotenv').config();

var register = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    var errors = (0, _expressValidator.validationResult)(req);

    if (!errors.isEmpty()) {
      return (0, _response.error)(req, res, {
        errores: errors.array()
      }, 422);
    }

    req.body.password = _bcryptjs.default.hashSync(req.body.password, 10);
    yield _database.User.create(req.body);
    (0, _response.success)(req, res, "Se creo el usuario", 200);
  });

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.register = register;

var login = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (req, res) {
    var user = yield _database.User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (user) {
      var same = _bcryptjs.default.compareSync(req.body.password, user.password);

      if (same) {
        (0, _response.success)(req, res, createToken(user), 200);
      } else {
        (0, _response.error)(req, res, 'Error en email y/o contraseña', 203);
      }
    } else {
      (0, _response.error)(req, res, 'Error en email y/o contraseña', 203);
    }
  });

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.login = login;

var createToken = user => {
  var payload = {
    userId: user.id,
    createdAt: (0, _moment.default)().unix(),
    expiresAt: (0, _moment.default)().add(5, 'minutes').unix()
  };
  return _jwtSimple.default.encode(payload, process.env.SECRET_KEY);
};
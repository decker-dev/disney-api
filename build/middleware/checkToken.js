"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkToken = void 0;

var _jwtSimple = _interopRequireDefault(require("jwt-simple"));

var _response = require("../utils/response");

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res, next) {
    if (!req.headers["user-token"]) {
      return (0, _response.error)(req, res, "Nesecita incliur un Authorization en la cabecera", 401);
    }

    var userToken = req.headers["user-token"];
    var payload = {};

    try {
      payload = _jwtSimple.default.decode(userToken, process.env.SECRET_KEY);
    } catch (err) {
      return (0, _response.error)(req, res, "el token es incorrecto", 401);
    }

    if (payload.expiresAt < (0, _moment.default)().unix()) {
      return (0, _response.error)(req, res, "el token a expirado", 401);
    }

    next();
  });

  return function checkToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkToken = checkToken;
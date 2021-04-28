"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("/POST  /auth/login", () => {
  it('responde un json cuando inicia sesión', done => {
    (0, _supertest.default)(_index.default).get('/auth/login').set('Accept', 'application/json').expect('Content-Type', 'application/json; charset=utf-8').expect(200, done);
  });
});
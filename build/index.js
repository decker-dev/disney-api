"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import config from '../config'
require('dotenv').config();

_app.default.listen(process.env.PORT);

console.log('server on', process.env.PORT);
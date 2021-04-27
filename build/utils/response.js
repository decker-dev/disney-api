"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.success = void 0;

var success = (req, res, message, status) => {
  var statusCode = status || 200;
  var statusMessage = message || '';
  res.status(status).send({
    error: false,
    status: statusCode,
    body: statusMessage
  });
};

exports.success = success;

var error = (req, res, message, status) => {
  var statusCode = status || 500;
  var statusMessage = message || 'Internal Server Error';
  res.status(status).send({
    error: true,
    status: statusCode,
    body: statusMessage
  });
};

exports.error = error;
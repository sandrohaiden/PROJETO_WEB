const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  const controller = require('../controller/login-controller')(connection);

  router.get('/login', controller.get);
  router.post('/login', controller.post);

  return router;
}
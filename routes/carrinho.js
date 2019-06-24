const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  const controller = require('../controller/carrinho-controller')(connection);

  router.get('/carrinho', controller.get);

  return router;
}
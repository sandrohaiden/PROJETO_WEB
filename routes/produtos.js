const express = require('express');
const router = express.Router();

module.exports = (connection) => {
  const controller = require('../controller/produto-controller')(connection);

  router.get('/', controller.get);
  router.get('/produtos/:id', controller.getByid);
  router.post('/', controller.post);


  return router;
}
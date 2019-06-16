const express = require('express');
const upload = require('../controller/upload');
const router = express.Router();

module.exports = (connection) => {
  const controller = require('../controller/produto-controller')(connection);

  router.get('/', controller.get);
  router.post('/', upload.any('teste'), controller.post);

  return router;
}


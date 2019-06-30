const express = require('express');
const upload = require('../controller/upload');
const router = express.Router();

module.exports = (connection) => {
  const controller = require('../controller/produto-controller-admin')(connection);

  router.get('/admin/produtos', controller.get);
  router.get('/admin/produtos/:id', controller.getById);
  router.post('/', upload.any('teste'), controller.post);

  return router;
}
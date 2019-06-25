const express = require('express');
const upload = require('../controller/uploadCandidato');
const router = express.Router();

module.exports = (connection) => {
  const controller = require('../controller/candidato-controller')(connection);

  router.get('/', controller.get);
  router.post('/', upload.any('arq'), controller.post);

  return router;
}
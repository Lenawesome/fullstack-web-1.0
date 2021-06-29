const express = require('express');
const router = express.Router();
const service = require('./product.service');

router.get('/', async function(req, res) {
  try {
    const data = await service.find(req.query);
    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

router.post('/', function(req, res) {
  service.create(req.body).then(function (result) {
    res.json(result);
  }).catch(function(error) {
    res.status(500).json(error);
  });
});

router.put('/:id', function(req, res) {
  service.update(req.params.id, req.body, function () {
    res.send("OK");
  });
});

router.delete('/:id', function (req, res) {
  service.remove(req.params.id, function () {
    res.send("OK");
  });
})

module.exports = {
  router: router
};
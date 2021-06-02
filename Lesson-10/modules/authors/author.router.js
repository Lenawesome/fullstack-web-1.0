const express = require('express');
const router = express.Router();
const service = require('./author.service');

router.get('/', async function(req, res) {
    try {
        const data = await service.find();
        res.json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', async function(req, res) {
    try {
        const result = await service.create(req.body);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.put('/:id', async function(req, res) {
    try {
        await service.update(req.params.id, req.body);
        res.send("OK");
    } catch (error) {
        res.status(500).json(error);
    }
});

router.delete('/:id', async function(req, res) {
    try {
        await service.remove(req.params.id);
        res.send('OK');
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = {
    router: router
};
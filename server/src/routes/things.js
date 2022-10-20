const { Router } = require('express');
const Thing = require('../models/thing.js');

// GET /api/things => list all things
// GET /api/things/:id => show particular thing
// POST /api/things => create new thing
// PUT /api/things/:id => edit particular thing
// DELETE /api/things/:id => removes particular thing

async function index(req, res) {
    const things = Thing.findAll();

    res.json({ things });
}

async function create(req, res) {
    const { body } = req;

    const thing = new Thing(body);

    res.json({ thing });
}

async function read(req, res) {
    const { id } = req.params;

    const thing = Thing.findById(Number(id));
    if (!thing) {
        return res.status(404).json({ error: `Thing with id ${id} not found` });
    }

    res.json({ thing });
}

module.exports = Router()
    .get('/', index)
    .post('/', create)
    .get('/:id', read);

const { Router } = require('express');
const Property = require('../models/property.js');

// GET /api/things => list all things
// GET /api/things/:id => show particular thing
// POST /api/things => create new thing
// PUT /api/things/:id => edit particular thing
// DELETE /api/things/:id => removes particular thing

async function index(req, res) {
    const properties = Property.findAll();

    res.json({ properties });
}

async function create(req, res) {
    const { body } = req;

    const property = new Property(body);

    res.json({ property });
}

async function read(req, res) {
    const { id } = req.params;

    const property = Property.findById(id);
    if (!property) {
        return res.status(404).json({ error: `Property with id ${id} not found` });
    }

    res.json({ property });
}

module.exports = Router()
    .get('/', index)
    .post('/', create)
    .get('/:id', read);

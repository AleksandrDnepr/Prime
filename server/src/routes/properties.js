const { Router } = require('express');
const Property = require('../models/property.js');

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
    .post('/', create)
    .get('/:id', read);

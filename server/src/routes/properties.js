const { Router } = require('express');
const Property = require('../static-models/property.js');

async function read(req, res) {
    const { id } = req.params;

    const property = Property.findById(id);
    if (!property) {
        return res.status(404).json({ error: `Property with id ${id} not found` });
    }

    res.json({ property });
}

async function index(req, res) {
    const properties = Property.findAll();

    res.json({ properties });
}


module.exports = Router()
    .get('/', index)
    .get('/:id', read);

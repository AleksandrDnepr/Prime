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
    let { page, mode } = req.body;
    if (!page) {page = 1;}
    if (!mode) {mode = "grid";}
    const perPage = mode === "grid" ? 12 : 8;
    const offset = (page - 1) * perPage;
    const limit = offset + perPage;

    const pages = Math.ceil(Property.findAll().length/perPage);

    const properties  = Property.findAll().slice(offset, limit);

    res.json({ page, pages, mode, properties });
}


async function filter(req, res) {
    const { body } = req;
    const {properties} = Property.filterAll(body);

    res.json({ properties });
}


module.exports = Router()
    .get('/', index)
    .post('/', index)
    .post('/', filter)
    .get('/:id', read);

const { Router } = require('express');
const Property = require('../static-models/property.js');
const Agent = require("../static-models/agent.js");


async function read(req, res) {
    const { id } = req.params;

    const property = Property.findById(id);
    if (!property) {
        return res.status(404).json({ error: `Property with id ${id} not found` });
    }

    res.json({ property });
}

async function index(req, res) {
    let { query } = req;
    let {page, ...filterParam} = query;

    if (!page) {page = 1;}
    if (!filterParam) {filterParam = {}}

    const perPage = 8;
    const offset = (page - 1) * perPage;
    const limit = offset + perPage;
    
    const filtredProperties = Property.filterAll(filterParam);

    const pages = Math.ceil(filtredProperties.length / perPage);

    const properties  = filtredProperties.slice(offset, limit);
    
    res.json({ pages,  properties });
}

async function getMessage(req, res) {
    const { id } = req.params;

    const property = Property.findById(id);
    if (!property) {
        return res.status(404).json({ error: `Property with id ${id} not found` });
    }

    const agentId = property.attached_agents_id;
    const agent = Agent.findById(agentId);

    if(agent.email !== req.user.email) {
        return res.status(403).json({ error: `Messages property with id ${id} is Forbidden for ${agent.name}` })
    }

    res.send(`Messages ${property.id}`)
}

module.exports = Router()
    .get('/', index)
    .get('/:id', read)
    .get('/:id/messages', getMessage);

const { Router } = require('express');
const Agent = require('../models/agent.js');


async function read(req, res) {
    const { id } = req.params;

    const agent = Agent.findById(id);
    if (!agent) {
        return res.status(404).json({ error: `Agent with id ${id} not found` });
    }

    res.json({ agent });
}

async function sendMailToAgent({body}, res) {

  Agent.sendEmail(body)
  .then(() => res.json({ body }))
  .catch(() => res.json({error: 'Something wrong'}));
}

module.exports = Router()
    .get('/:id', read)
    .post('/:id/send-mail', sendMailToAgent)

    
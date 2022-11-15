const { Router } = require("express");
const Agent = require("../static-models/agent.js");
const {Message} = require('../models');

async function read(req, res) {
    const { id } = req.params;
    const agent = Agent.findById(id);
    
    if (!agent) {
        return res.status(404).json({ error: `Agent with id ${id} not found` });
    }

    res.json({ agent });
}

async function sendMailToAgent(req, res) {
    const {body, params} = req;

    const agent = Agent.findById(params.id);
     await Message.create({
        name: body.info.name,
        email: body.info.email,
        text: body.info.message,
        prop_id: body.info.propertyId,
    })
    
    Agent.sendEmail({ ...body, email: agent.email })
        .then(() => res.json({ body }))
        .catch(() => res.json({ error: "Something wrong" }));

}

module.exports = Router()
    .get("/:id", read)
    .post("/:id/send-mail", sendMailToAgent);

const agents = require("../data/agents.json");

module.exports = class Agent {
  static AGENTS = agents.agents_info;

  static findByEmail(email) {
    return Agent.agentsEmails().includes(email)
      ? Agent.AGENTS.find((agent) => agent.email === email)
      : { name: "stranger", email: "stranger", id: "stranger" };
  }

  static agentsEmails() {
    const emails = [];
    Agent.AGENTS.map((agent) => emails.push(agent.email));
    return emails;
  }
};

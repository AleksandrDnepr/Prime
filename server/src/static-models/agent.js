const nodemailer = require("nodemailer");
const config = require("config");
const agents = require("../data/agents.json");

module.exports = class Agent {
  static AGENTS = agents.agents_info;

  static findById(id) {
    return Agent.AGENTS.find((agent) => agent.id === id);
  }

  static findByEmail(email) {
    return Agent.AGENTS.find((agent) => agent.email === email);
  }

  static async sendEmail(data) {
    return sendEmail(data);
  }
};

async function sendEmail({info, email}) {

  const transporter = nodemailer.createTransport(
    {
      host: config.get('emailConfig.host'),
        port: config.get('emailConfig.port'),
        secure: config.get('emailConfig.secure'),
        auth: {
            user: config.get('emailConfig.auth.user'),
            pass: config.get('emailConfig.auth.pass')
      },
    },
    {
      from: "Jeff Agent <maiya59@ethereal.email>",
    }
  );

  const result = await transporter
    .sendMail({
      from: `"${info.name}" <${info.email}>`,
      to: email,
      subject: 'Dear Agent!',
      text: `Client ${info.name} (email: ${info.email}),
      asked about property id:${info.propertyId}.
      Here's his/her massage:
      "${info.message}"`,
    })
    .catch(console.log);

  console.log("Message sent: %s", result.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
}

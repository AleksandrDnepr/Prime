const nodemailer = require("nodemailer");
const config = require("config");

module.exports = class Agent {
  static AGENTS = [];

  static findById(id) {
    return Agent.AGENTS.find((agent) => agent.id === id);
  }

  static async sendEmail(data) {
    return sendEmail(data);
  }
};

async function sendEmail({info, email}) {
  const testAccount = await nodemailer.createTestAccount();

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
      from: "Jeff Agent <jeff77@ethereal.email>",
    }
  );

  const result = await transporter
    .sendMail({
      from: `"${info.name}" <${info.email}>`,
      to: email,
      subject: 'Dear Agent!',
      text: `${info.message}`,
    })
    .catch(console.log);

  console.log("Message sent: %s", result.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
}

const nodemailer = require("nodemailer");

module.exports = class Agent {
  static AGENTS = [];

  static findById(id) {
    return Agent.AGENTS.find((agent) => agent.id === id);
  }

  static async sendEmail(data) {
    return sendEmail(data);
  }
};

async function sendEmail(data) {
  const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(
    {
      host: "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    },
    {
      from: "Jeff Agent <jeff77@ethereal.email>",
    }
  );

  const info = await transporter
    .sendMail({
      from: `"${data.name}" <${data.email}>`,
      to: "vera.smulskaya@gmail.com",
      text: `${data.message}`,
    })
    .catch(console.log);

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

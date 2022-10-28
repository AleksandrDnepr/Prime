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

async function sendEmail({info, email}) {
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

  const result = await transporter
    .sendMail({
      from: `"${info.name}" <${info.email}>`,
      to: email,
      text: `${info.message}`,
    })
    .catch(console.log);

  console.log("Message sent: %s", result.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(result));
}

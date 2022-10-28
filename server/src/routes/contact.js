const nodemailer = require("nodemailer");
const config = require("config");


const transporter = nodemailer.createTransport(
    {
        host: config.get('emailConfig.host'),
        port: config.get('emailConfig.port'),
        secure: config.get('emailConfig.secure'),
        auth: {
            user: config.get('emailConfig.auth.user'),
            pass: config.get('emailConfig.auth.pass')
        }
    },
    {
        from: 'Jeff Agent <jeff77@ethereal.email>',
    }
);


function contact(req, res) {
    const { body } = req;

    const message = {        
        to: body.email,
        from: 'Jeff Agent <jeff77@ethereal.email>',
        subject: 'Dear Agent!',
        text: `
            Client ${body.name} (email: ${body.email}), asked about property. 
            Here's his/her massage: 
            "${body.message}"
        `
    }

    transporter.sendMail(message, (err, info) => {
        if(err) return console.log("SORRY", err)
        console.log('Email sent: ', info)
    })

    res.sendStatus(200);

};

module.exports = contact;






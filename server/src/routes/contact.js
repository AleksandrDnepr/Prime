const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport(
    {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: 'jeff77@ethereal.email',
            pass: '9XVjJt1zkbzMNVTPnG'
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






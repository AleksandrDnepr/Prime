const express = require("express");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: 'wayne16@ethereal.email',
        pass: 'wq6BZCytMCt3WQ861m'
    }
});


const mailer = message => {
    transporter.sendMail(message, (err, info) => {
        if(err) return console.log(err);
        console.log("Email sent: ", info)
    })
}

module.exports = mailer;
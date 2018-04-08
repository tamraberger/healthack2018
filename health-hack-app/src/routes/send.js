var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var smtpTranspot = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'healthhomestl@gmail.com',
        pass: 'healthhack2018'
    }
});

router.get('/send', function(req, res, next) {
    let mailOptions = {
        to: 'john.doe.2018stl@gmail.com',
        subject: 'Potential Flu Outbreak In Your Area!',
        text: 'We have been alerted that your area could have an outbreak of the flu. Do your best to prevent geting sick with our health tips!',
        html: '<a href="">Click this link to learn more!</a>'
    }

    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end();
        } else {
            console.log(response);
            res.end();
        }
    });
});

modules.export = router;
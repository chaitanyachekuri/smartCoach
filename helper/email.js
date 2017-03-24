/**
 * Created by kchekuri on 3/24/2017.
 */
const mailer = require("nodemailer");

module.exports = function(mailOptions){
    "use strict";
    // Use Smtp Protocol to send Email
    let transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'smartcoach17@gmail.com',
            pass: 'Smart16209870'
        }
    });
    console.log(mailOptions);

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });

}
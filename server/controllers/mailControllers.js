const nodemailer = require('nodemailer');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const htmlTemplate = (address, content) => {
    return `
      <h2>Otrzymałeś maila od : ${address}</h2>
      <p>${content}</p>
    `
}
exports.sendEmail = async (req, res) => {
    
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS
        }
    });

    const mailOptions = {
        from: req.body.address, // sender address
        to: 'nolandos.test@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        html: htmlTemplate(req.body.address, req.body.content) // plain text body
      };

    // send mail with defined transport object
    if(req.body.address === '' || req.body.subject === '' || req.body.content === '') {
        res.status(500).json('Complete the fields!')
    } else {
    await transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          res.status(200).json('Sent!');
          console.log(info);
     });
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
};
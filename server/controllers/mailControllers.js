const nodemailer = require('nodemailer');


exports.sendEmail = async (req, res) => {
    //console.log(req.body);
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    //let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'nolandos.test@gmail.com',
            pass: '7NOLAND34test@'
        }
    });
    
    const mailOptions = {
        from: req.body.address, // sender address
        to: 'nolandos.test@gmail.com', // list of receivers
        subject: req.body.subject, // Subject line
        html: `<h1>${req.body.content}</h1>` // plain text body
      };

    // send mail with defined transport object
    if(req.body.address === '') {
      const err = new Error('Nie podałeś adresu email');
      res.status(500).send('Something broke!')
    } else if (req.body.subject === '') {
      const err = new Error('Nie podałeś tematu');
      res.send({ error: 'Something failed!' });
    } else if (req.body.html === '') {
      const err = new Error('Nie podałeś treści maila');
      res.send({ error: 'Something failed!' });
    } else {

    await transporter.sendMail(mailOptions, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
     });
    }
    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
     
};

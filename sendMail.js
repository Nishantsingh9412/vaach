const nodemailer = require("nodemailer");

const sendMail = async(req,res)=>{
    // let testAccount  = await nodemailer.createTestAccount();

    // let transporter = await nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    // auth: {
    //     user: 'walton.zemlak@ethereal.email',
    //     pass: 'cQDW6k85nTxY973uMj', // generated ethereal password
    // },
    // });

    let transporter = await nodemailer.createTransport({
        service:"gmail",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'nishantsingh9412ns@gmail.com',
            pass: 'qctzfmajihugytjd', // generated ethereal password
        },
    });


    let info = await transporter.sendMail({
    from: '" Soulease 👻" <nishantsingh9412@gmail.com>', // sender address
    to: "tech13330@gmail.com", // list of receivers
    // to: "nishantsingh9412ns@gmail.com, baz@example.com", // list of receivers
    subject: "Hello ✔ Testing For Soulease", // Subject line
    text: "Hello world?", // plain text body
    html: "<h1>Hello motto</h1>", // html body
  });

  
  console.log("Message sent: %s", info.messageId);
  res.json(info)
}
module.exports = sendMail;

const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
    host: "email-smtp.ap-south-1.amazonaws.com",
    port: 587,
    secure: false,

    auth: {
        user: "AKIAUVIOYREHTNAQ55UY",
        pass: "orYBnJcqaRhM6WjSer93E3Mqltp5fvLxdTPA/xEy"
    }
})

const mailOptions = {
    from: "oblivionverma@gmail.com",
    to: "cool.aarav568@gmail.com",
    subject: "HEllo",
    text: "Hello Nodemailer"
}

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error", error)
    } else {
        console.log("Email send", info.response)
    }
})
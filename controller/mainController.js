import nodemailer from "nodemailer";
import { StatusCodes } from "http-status-codes";
const sendMail = async (req, res) => {
  const transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "fae.boyer@ethereal.email",
      pass: "DQK44c3ZmG7Gg8sn6N",
    },
  });
  const info = transport.sendMail({
    from: "note <maha@gmail.com>",
    to: "kavi@gmail.com",
    subject: "Hello",
    text: "Hello World",
  });
  res.status(StatusCodes.OK).json({ msg: info });
};

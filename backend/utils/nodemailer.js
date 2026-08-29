import nodemailer from 'nodemailer'
import dotenv from "dotenv";
dotenv.config();

let transport=nodemailer.createTransport({
service:"gmail",
auth:{
    pass:process.env.GMAIL_APP_PASSWORD,
    user:process.env.GMAIL_USER
}
})

export default transport;
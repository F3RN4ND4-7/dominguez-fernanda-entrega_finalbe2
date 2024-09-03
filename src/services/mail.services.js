import nodemailer from "nodemailer";
import { config } from "../config/config.js";
import __dirname from "../dirname.js";

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: config.mailer.host,
      port: config.mailer.port,
      auth: config.mailer.auth,
    });
  }

  getMessageTemplate(type, mail) {
    let body = `<h1>Hola ${mail},</h1>`;

    switch (type) {
      case "welcome":
        body += `        
        <p style="font-size: 16px">Te damos la bienvenida a nuestra tienda.</p>
        
        <p style="font-size: 16px; color: blue">Si tienes alguna pregunta, no dudes en contactarnos.</p>
        `;
        break;

      case "activation":
        body += `        
        Te damos la bienvenida a nuestra tienda. 
        
        Si tienes alguna duda, contáctanos.
      `;
        break;
    }

    body += `        
    <p style="font-size: 16px; color: blue">¡Saludos!,</p>
    <p style="font-size: 16px; >Equipo de Domínguez México</p>
    `;

    return body;
  }

  async sendMail({ to, subject, type }) {
    const message = this.getMessageTemplate(type, to);

    const info = await this.transporter.sendMail({
      from: '"Equipo Domínguez México" <vozzzoaa@gmail.com>',
      to,
      subject,
      html: message,
    });

    // console.log(info);
  }
}

export const mailService = new MailService();

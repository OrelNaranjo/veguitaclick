import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as hbs from 'nodemailer-express-handlebars';
import * as dotenv from 'dotenv';
import * as handlebars from 'handlebars';

dotenv.config();

@Injectable()
export class MailsService {
  private transporter: nodemailer.Transporter;
  private companyData: any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    handlebars.registerHelper('formatDate', (date: string) => {
      return new Date(date).toLocaleDateString();
    });

    handlebars.registerHelper('formatCurrency', (value: number) => {
      return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(value);
    });

    this.companyData = {
      companyName: process.env.COMPANY_NAME,
      logoUrl: process.env.COMPANY_LOGO_URL,
      companyAddress: process.env.COMPANY_ADDRESS,
      companyPhone: process.env.COMPANY_PHONE,
      companyEmail: process.env.COMPANY_EMAIL,
    };

    this.transporter.use('compile', hbs({
      viewEngine: {
        extname: '.hbs',
        partialsDir: 'src/templates/partials/',
        layoutsDir: 'src/templates/layouts/',
        defaultLayout: 'main',
      },
      viewPath: 'src/templates/mails/',
      extName: '.hbs',
    }));
  }

  public async send(templateName: string, subject: string, data: any): Promise<void> {

    await this.transporter.sendMail({
      to: data.email,
      from: process.env.MAIL_FROM,
      subject: subject,
      template: templateName,
      context: { ...data, ...this.companyData },
      attachments: [
        {
          filename: 'logotipo-largo.png',
          path: this.companyData.logoUrl,
          cid: 'companyLogo'
        }
      ]
    } as any);
  }
}
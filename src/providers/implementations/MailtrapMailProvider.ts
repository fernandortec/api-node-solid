import { IMailProvider, IMessage } from '../IMailProvider';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'caa20bdbea9b23',
        pass: '1ecf5af8520095',
      },
    });
  }
  async sendMail({ body, from, subject, to }: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: to.name,
        address: to.email,
      },
      from: {
        name: from.name,
        address: from.email,
      },
      subject: subject,
      html: body,
    });
  }
}

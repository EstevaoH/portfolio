import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from './../mail-adapter';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "148877d2789685",
        pass: "7dd07628138956"
    }
});

export class NodemailerAdapter implements MailAdapter {

    async sendMail(data: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <estevao@mail.com>',
            to: 'Estevão <estevaohenril@gmail.com>',
            subject: data.subject,
            html: data.body
        });
    };
}
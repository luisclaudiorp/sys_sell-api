import { MailerService } from "@nestjs-modules/mailer";
import { Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { OrderType } from "../Types/order/OrderType";

@Processor('sendMail-queue')
export class SendMailConsumer{
    constructor( private mailService: MailerService){}

    @Process('sendMail-Job')
    async sendMailJob(job: Job<OrderType>){
        const { data } = job

        console.log(data)

        await this.mailService.sendMail({
            to: "luisclaudiorp@gmail.com",
            from: "Equipe Desenvolvimento <luisclaudiorp@gmail.com>",
            subject: "Compra Efetivada com sucesso!",
            text: `Ola sua compra no valor de R$${data.amount} foi feita com sucesso e esta sendo processada!`
        })
    }
}
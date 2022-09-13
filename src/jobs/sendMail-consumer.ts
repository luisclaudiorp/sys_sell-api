import { MailerService } from "@nestjs-modules/mailer";
import { OnQueueActive, OnQueueCompleted, OnQueueProgress, Process, Processor } from "@nestjs/bull";
import { Job } from "bull";
import { OrderType } from "../Types/order/OrderType";

@Processor('sendMail-queue')
export class SendMailConsumer{
    constructor( private mailService: MailerService){}

    @Process('sendMail-job')
    async sendMailJob(job: Job<OrderType>){
        const { data } = job
        
        await this.mailService.sendMail({
            to: "luisclaudiorp@gmail.com",
            from: "Equipe Desenvolvimento <luisclaudiorp@gmail.com>",
            subject: "Compra Efetivada com sucesso!",
            text: `Ola sua compra no valor de R$${data.amount} foi feita com sucesso e esta sendo processada!`
        })
    }

    @OnQueueCompleted()
    onCompleted(job: Job){
        console.log(`On Completed: ${job.name}`);
    }

    @OnQueueProgress()
    onProgress(job: Job){
        console.log(`On Progress: ${job.name}`);
    }

    @OnQueueActive()
    onActive(job: Job){
        console.log(`On Active: ${job.name}`);
    }


}
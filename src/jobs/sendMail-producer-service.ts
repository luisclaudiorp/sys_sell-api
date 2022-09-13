import { InjectQueue } from "@nestjs/bull";
import { Injectable } from "@nestjs/common";
import { Queue } from "bull";
import { OrderType } from "../Types/order/OrderType";

@Injectable()
export class SendMailProducerService {
    constructor(@InjectQueue('sendMail-queue') private queue: Queue){}
    
    async sendMail(order: OrderType){
       await this.queue.add("sendMail-job", order, {
        delay: 5000
       })
    }
}
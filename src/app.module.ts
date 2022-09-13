import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule, InjectQueue } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MiddlewareBuilder } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Queue } from 'bull';
import { createBullBoard } from 'bull-board';
import { OrderController } from './Controllers/Order.controller';
import { ProductController } from './Controllers/Product.controller';
import { SellerController } from './Controllers/Seller.controller';
import { OrderEntity } from './Entities/Order.entity';
import { ProductEntity } from './Entities/Product.entity';
import { SellerEntity } from './Entities/Seller.entity';
import { SendMailConsumer } from './jobs/SendMail-consumer';
import { SendMailProducerService } from './jobs/SendMail-producer-service';
import { OrderRepository } from './Repository/Order.repository';
import { ProductRepository } from './Repository/Product.repository';
import { SellerRepository } from './Repository/Seller.repository';
import { OrderService } from './Services/Order.service';
import { ProductService } from './Services/Product.service';
import { SellerService } from './Services/Seller.service';
import { BullAdapter } from 'bull-board/bullAdapter';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
      },
    }),
    BullModule.registerQueue({
      name: "sendMail-queue"
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASS,
      database: process.env.MYSQL_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      ProductEntity,
      SellerEntity,
      OrderEntity
    ])
  ],
  controllers: [
    ProductController, 
    SellerController, 
    OrderController
  ],
  providers: [
    SendMailProducerService, SendMailConsumer,
    ProductRepository, ProductService,
    SellerRepository, SellerService, 
    OrderRepository, OrderService, 
  ],
})
export class AppModule {
  constructor(@InjectQueue('sendMail-queue') private sendMailQueue: Queue){}

  configure(consumer: MiddlewareBuilder){
    const { router } = createBullBoard([
      new BullAdapter(this.sendMailQueue)
    ])
    consumer.apply(router).forRoutes('/admin/queues')
  }
}

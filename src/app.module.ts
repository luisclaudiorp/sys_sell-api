import { MailerModule } from '@nestjs-modules/mailer';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './Controllers/Order.controller';
import { ProductController } from './Controllers/Product.controller';
import { SellerController } from './Controllers/Seller.controller';
import { OrderEntity } from './Entities/Order.entity';
import { ProductEntity } from './Entities/Product.entity';
import { SellerEntity } from './Entities/Seller.entity';
import { SendMailConsumer } from './jobs/sendMail-consumer';
import { SendMailProducerService } from './jobs/sendMail-producer-service';
import { OrderRepository } from './Repository/Order.repository';
import { ProductRepository } from './Repository/Product.repository';
import { SellerRepository } from './Repository/Seller.repository';
import { OrderService } from './Services/Order.service';
import { ProductService } from './Services/Product.service';
import { SellerService } from './Services/Seller.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6379
      },
    }),
    BullModule.registerQueue({
      name: "sendMail-queue"
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.HOST_MAIL,
        port: Number(process.env.PORT_MAIL),
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.PASS_MAIL
        }
      }
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'dev',
      password: '1234',
      database: 'sell',
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
export class AppModule {}

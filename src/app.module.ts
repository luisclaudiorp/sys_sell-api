import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './Controllers/Product.controller';
import { SellerController } from './Controllers/Seller.controller';
import { OrderEntity } from './Entities/Order.entity';
import { ProductEntity } from './Entities/Product.entity';
import { SellerEntity } from './Entities/Seller.entity';
import { ProductRepository } from './Repository/Product.repository';
import { SellerRepository } from './Repository/Seller.repository';
import { ProductService } from './Services/Product.service';
import { SellerService } from './Services/Seller.service';

@Module({
  imports: [
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
  controllers: [ProductController, SellerController],
  providers: [ProductService, ProductRepository, SellerRepository, SellerService],
})
export class AppModule {}

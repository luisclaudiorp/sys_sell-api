import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './Controllers/Product.controller';
import { ProductEntity } from './Entities/Product.entity';
import { ProductRepository } from './Repository/Product.repository';
import { ProductService } from './Services/Product.service';

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
      synchronize: false,
    }),
    TypeOrmModule.forFeature([
      ProductEntity
    ])
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository],
})
export class AppModule {}

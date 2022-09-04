import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from './Controllers/Produto.controller';
import { ProdutoEntity } from './Entities/Produto.entity';
import { ProdutoRepository } from './Repository/Produto.repository';
import { ProdutoService } from './Services/Produto.service';

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
      ProdutoEntity
    ])
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService, ProdutoRepository],
})
export class AppModule {}

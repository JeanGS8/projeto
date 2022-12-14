import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModule } from './produto/produto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_organica',
      entities: [Produto], // são as entidades do banco de dados
      synchronize: true // ele sincroniza com o banco dedos automaticamente
    }),
    ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

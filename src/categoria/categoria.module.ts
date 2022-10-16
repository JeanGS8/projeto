import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
   controllers: [], // Controller
   exports: [TypeOrmModule],
   imports: [],
   providers: [], // Service
})
export class CategoriaModule{}
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConfigModule.forRoot(), ProductModule, MongooseModule.forRoot(process.env.DATABASE_MONGO)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

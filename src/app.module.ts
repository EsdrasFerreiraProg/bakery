import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AppConfigModule } from './app-config/app-config.module';


@Module({
  imports: [ConfigModule.forRoot(), ProductModule, MongooseModule.forRoot(process.env.DATABASE_MONGO), UserModule, AuthModule, AppConfigModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

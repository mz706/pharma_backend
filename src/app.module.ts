/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
// import { userModules } from './products/user.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/syngrow_ecommerce'), 
  ProductModule
],
  controllers: [
    // AppController
  ],
  providers: [
    // AppService
  ],
})
export class AppModule {}

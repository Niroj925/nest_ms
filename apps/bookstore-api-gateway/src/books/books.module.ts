import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { BOOKS_CLIENT } from './constant';
import { ClientConfigModule } from '../client-config/client-config.module';
import { ClientConfigService } from '../client-config/client-config.service';
import { config } from 'process';

@Module({
  imports:[
    ClientsModule.register([
      {
        name:BOOKS_CLIENT,
        transport:Transport.TCP,
        options:{port:3002}
      }
    ])
  ],
  controllers: [BooksController],
  providers: [
    BooksService,
    //this is used to prevent update the port
  // {
  //   provide:BOOKS_CLIENT,
  //   useFactory:(configService:ClientConfigService)=>{
  //     const clientOptions=configService.booksClientOptions();
  //     return ClientProxyFactory.create(clientOptions);
  //   },
  //   inject:[ClientConfigService]
  // }
  ],
})
export class BooksModule {}

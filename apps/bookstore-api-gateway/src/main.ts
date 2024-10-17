import { NestFactory } from '@nestjs/core';
import { BookstoreApiGatewayModule } from './bookstore-api-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGatewayModule);
  await app.listen(process.env.port ?? 3000);
  console.log('bookstore-api-gateway is running on port 3000');
}
bootstrap();
